# Ekohacks Workshop: Security Vulnerabilities in Dependencies

A hands-on exercise for understanding, identifying, and fixing real-world security vulnerabilities.

---

## Getting Started

Choose your preferred environment:

### Option A: Docker (Recommended)

```bash
# Build the workshop container
docker build -f Dockerfile.workshop -t ekohacks/vuln-workshop .

# Run interactive workshop
docker run -it --rm ekohacks/vuln-workshop

# Or use docker-compose
docker-compose -f docker-compose.workshop.yml up -d
docker-compose -f docker-compose.workshop.yml exec workshop sh
```

### Option B: Git Branch

```bash
# Switch to the vulnerable branch
git checkout workshop/vulnerable-deps

# Install vulnerable dependencies
npm install --legacy-peer-deps

# Verify vulnerability exists
npm audit
```

### Option C: Manual Downgrade

```bash
# From main branch, downgrade eslint
npm install eslint@8.57.1 --legacy-peer-deps

# Verify vulnerability
npm audit
```

---

## Overview

In this workshop, you'll learn how a **Stack Overflow vulnerability** in ESLint (CVE-2025-50537) worked, how to identify vulnerable dependencies, and how to fix them using TDD principles.

**Time:** 45-60 minutes
**Difficulty:** Intermediate
**Prerequisites:** Basic JavaScript, npm, understanding of recursion

---

## Part 1: Understanding the Vulnerability

### What Happened?

ESLint versions before 9.26.0 had a vulnerability in `lib/shared/serialization.js`. When the `isSerializable()` function encountered an object with **circular references**, it would recurse infinitely until the call stack overflowed.

### The Vulnerable Code

```javascript
// ESLint < 9.26.0 - VULNERABLE
function isSerializable(val) {
  if (!isSerializablePrimitiveOrPlainObject(val)) {
    return false;
  }
  if (typeof val === "object") {
    for (const property in val) {
      if (Object.hasOwn(val, property)) {
        if (!isSerializablePrimitiveOrPlainObject(val[property])) {
          return false;
        }
        if (typeof val[property] === "object") {
          // BUG: No check for circular references
          // This will infinitely recurse if val[property] === val
          if (!isSerializable(val[property])) {
            return false;
          }
        }
      }
    }
  }
  return true;
}
```

### The Attack Vector

```javascript
// Create an object that references itself
const maliciousObject = {};
maliciousObject.circular = maliciousObject;

// When ESLint's RuleTester processes this:
// 1. isSerializable(maliciousObject) is called
// 2. It iterates to maliciousObject.circular
// 3. Calls isSerializable(maliciousObject.circular)
// 4. But maliciousObject.circular === maliciousObject
// 5. GOTO step 2... forever
// 6. Stack Overflow - Application crashes
```

### Why This Matters

| Impact | Description |
|--------|-------------|
| **Denial of Service** | Crashes the linting process |
| **CI/CD Pipeline** | Can halt automated builds |
| **Developer Experience** | Blocks development workflow |
| **CVSS Score** | 5.5 (Medium) |

---

## Part 2: Hands-On Exercise

### Setup

```bash
# Create a new directory for the exercise
mkdir vuln-exercise && cd vuln-exercise
npm init -y

# Create the vulnerable function
touch serialization.js
touch serialization.test.js
```

### Step 1: Reproduce the Vulnerability

Create `serialization.js`:

```javascript
/**
 * VULNERABLE VERSION
 * Check if a value is serializable (can be converted to JSON)
 */
function isSerializable(val) {
  // Primitives are always serializable
  if (val === null || typeof val !== 'object') {
    return typeof val !== 'function' && typeof val !== 'symbol';
  }

  // Check if it's a plain object or array
  const proto = Object.getPrototypeOf(val);
  if (proto !== Object.prototype && proto !== Array.prototype) {
    return false; // RegExp, Date, etc. are not serializable
  }

  // Recursively check all properties
  for (const key in val) {
    if (Object.hasOwn(val, key)) {
      if (!isSerializable(val[key])) {
        return false;
      }
    }
  }

  return true;
}

module.exports = { isSerializable };
```

### Step 2: Write the Failing Test (TDD Red Phase)

Create `serialization.test.js`:

```javascript
const { isSerializable } = require('./serialization');

describe('isSerializable', () => {
  // These should pass
  describe('serializable values', () => {
    test('primitives', () => {
      expect(isSerializable(null)).toBe(true);
      expect(isSerializable(42)).toBe(true);
      expect(isSerializable('hello')).toBe(true);
      expect(isSerializable(true)).toBe(true);
    });

    test('plain objects', () => {
      expect(isSerializable({})).toBe(true);
      expect(isSerializable({ a: 1, b: 'two' })).toBe(true);
    });

    test('arrays', () => {
      expect(isSerializable([])).toBe(true);
      expect(isSerializable([1, 2, 3])).toBe(true);
    });

    test('nested objects', () => {
      expect(isSerializable({ a: { b: { c: 1 } } })).toBe(true);
    });
  });

  // These should return false
  describe('non-serializable values', () => {
    test('functions', () => {
      expect(isSerializable(() => {})).toBe(false);
    });

    test('regex', () => {
      expect(isSerializable(/abc/)).toBe(false);
    });

    test('objects containing functions', () => {
      expect(isSerializable({ fn: () => {} })).toBe(false);
    });
  });

  // THE VULNERABILITY TEST - This will crash!
  describe('circular references', () => {
    test('self-referencing object should return false, not crash', () => {
      const obj = {};
      obj.self = obj;

      // This test will CRASH with "Maximum call stack size exceeded"
      // instead of returning false
      expect(isSerializable(obj)).toBe(false);
    });

    test('nested circular reference should return false', () => {
      const obj = { a: { b: {} } };
      obj.a.b.circular = obj;

      expect(isSerializable(obj)).toBe(false);
    });

    test('multiple references to same object (not circular) should work', () => {
      const shared = { value: 42 };
      const obj = {
        ref1: shared,
        ref2: shared,
        nested: { ref3: shared }
      };

      // This is NOT circular - same object referenced multiple times is fine
      expect(isSerializable(obj)).toBe(true);
    });
  });
});
```

### Step 3: Run the Test - Watch it Crash

```bash
npm install --save-dev jest
npx jest serialization.test.js
```

You should see:
```
RUNS  ./serialization.test.js
RangeError: Maximum call stack size exceeded
```

### Step 4: Fix the Vulnerability (TDD Green Phase)

Update `serialization.js`:

```javascript
/**
 * FIXED VERSION
 * Check if a value is serializable (can be converted to JSON)
 * Now with circular reference detection!
 */
function isSerializable(val, seen = new Set()) {
  // Primitives are always serializable
  if (val === null || typeof val !== 'object') {
    return typeof val !== 'function' && typeof val !== 'symbol';
  }

  // Check if it's a plain object or array
  const proto = Object.getPrototypeOf(val);
  if (proto !== Object.prototype && proto !== Array.prototype) {
    return false;
  }

  // SECURITY FIX: Detect circular references
  if (seen.has(val)) {
    return false; // Circular reference - not serializable
  }

  // Recursively check all properties, tracking what we've seen
  for (const key in val) {
    if (Object.hasOwn(val, key)) {
      // Create new Set with current object added to path
      if (!isSerializable(val[key], new Set([...seen, val]))) {
        return false;
      }
    }
  }

  return true;
}

module.exports = { isSerializable };
```

### Step 5: Run Tests Again - All Green

```bash
npx jest serialization.test.js
```

All tests should pass now.

---

## Part 3: Finding Vulnerabilities in Real Projects

### Using npm audit

```bash
# Check for known vulnerabilities
npm audit

# Get detailed report
npm audit --json

# Attempt automatic fixes
npm audit fix
```

### Using IDE Warnings

Most modern IDEs (VS Code, WebStorm, etc.) integrate with vulnerability databases and show warnings directly in `package.json`.

### Manual Dependency Review

```bash
# List outdated packages
npm outdated

# Check a specific package
npm view eslint versions
```

---

## Part 4: Key Takeaways

### The Bug Pattern

```
Recursive function + No cycle detection = Stack Overflow
```

### The Fix Pattern

```javascript
// Track visited nodes using a Set
function traverse(node, visited = new Set()) {
  if (visited.has(node)) {
    return; // Already visited - cycle detected
  }
  visited.add(node);

  for (const child of node.children) {
    traverse(child, visited);
  }
}
```

### Security Principles

| Principle | Application |
|-----------|-------------|
| **Defense in Depth** | Always validate input, even internal |
| **Fail Safely** | Return false rather than crash |
| **Test Edge Cases** | Circular refs, null, undefined, huge data |
| **Keep Dependencies Updated** | Regular `npm audit` and updates |

---

## Part 5: Discussion Questions

1. **Why wasn't this caught earlier?** What tests were missing?

2. **How would you write a test for this BEFORE knowing the bug exists?**

3. **What other recursive functions might have this vulnerability?**
   - Deep clone
   - Deep equality check
   - Tree traversal
   - Object serialization

4. **How does this relate to the Ekohacks philosophy?**
   - Craftsmanship: Understanding code deeply, not just using it
   - TDD: Tests catch bugs before they become CVEs
   - No AI shortcuts: You need to understand recursion to spot this

---

## References

- [GitHub Advisory GHSA-p5wg-g6qr-c7cg](https://github.com/advisories/GHSA-p5wg-g6qr-c7cg)
- [Original Bug Report](https://github.com/eslint/eslint/issues/19646)
- [Fix Pull Request](https://github.com/eslint/eslint/pull/19664)
- [Fix Commit](https://github.com/eslint/eslint/commit/d683aebc8e0792e4f80bd1488c705c90f22c317e)

---

## Bonus Challenge

Implement a `deepClone()` function that:
1. Handles circular references (returns the same cloned reference)
2. Doesn't crash on self-referencing objects
3. Has full test coverage

```javascript
// Your implementation here
function deepClone(obj, seen = new Map()) {
  // TODO: Implement with circular reference handling
}
```

---

*Workshop created for [Ekohacks](https://ekohacks.com) - Software Craftsmanship Dojo*
