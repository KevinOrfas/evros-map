# Ekohacks Platform Summary

## What Is Ekohacks?

A **software craftsmanship coding dojo** targeting Nigeria, combining:
- TDD (Test-Driven Development) from day one
- Vim-only editing (no mouse, no AI)
- James Shore's "Testing Without Mocks"
- XP programming practices
- Islamic prayer breaks + meditation
- DORA-style metrics and reporting

---

## 9 Core Domains

### 1. Philosophy & Vision
| Topic | Description |
|-------|-------------|
| Craftsmanship Ethos | "Love your code, love your craft" - well-crafted, readable, maintainable |
| Anti-AI Positioning | "Train with weights on" - no AI during sessions, builds supervision skills |
| Eco-Friendly Branding | "Eko" = Lagos + eco-friendly + economical, fewer AI tokens = lower carbon |

### 2. Market & Context
| Topic | Description |
|-------|-------------|
| Nigeria Tech Ecosystem | Gap between quick bootcamps and deep craftsmanship |
| Competitive Landscape | Uncontested niche - existing bootcamps focus on "get hired fast" |
| Vim Relevance 2026 | Still standard on servers, discipline tool not fashion choice |

### 3. Curriculum Structure
| Topic | Description |
|-------|-------------|
| 3-Weekend Pilot | WK1: TDD basics → WK2: Multiplayer → WK3: Load testing + DORA |
| 3-Month Bootcamp | M1: Foundations/CLI → M2: Data/Real-time → M3: Hardening/Teaching |
| Warm-Up Exercises | Higher-order functions (map/filter/reduce) via TDD |
| Main Project | Multiplayer Tic-Tac-Toe with WebSocket and load testing |

### 4. Teaching Methodologies
| Topic | Description |
|-------|-------------|
| TDD | Red-green-refactor, commit every green test |
| Testing Without Mocks | Sociable state-based tests, Nullables pattern |
| Vim Mastery | Non-negotiable from day one, progressive skill levels |
| XP Practices | User stories, pair programming, standups, retros |
| Pomodoro | 25min work + 5min break, aligned with prayer times |
| Browser Debugging | DevTools mastery, breakpoints over console.log |

### 5. Workshop Design
| Topic | Description |
|-------|-------------|
| One-Day Agenda | 9AM-5PM XP Engineering Day with 4 Pomodoro blocks |
| Junior Approach | 90% guided copying, demo → copy → practice pattern |
| Competitive Format | Teams solve same problems, scoring on craft + correctness |
| Interactive Elements | Whiteboard stories, quizzes, peer button Q&A |

### 6. Measurement & Reporting
| Topic | Description |
|-------|-------------|
| DORA Metrics | Deployment Freq, Lead Time, Change Failure Rate, MTTR |
| Craft Metrics | TDD discipline, test quality, refactoring commits |
| AI Consumption | Copilot accepts <20%, ChatGPT queries <5/day |
| Corporate Reports | Before/after PDF with graphs, "Elite Performer" badges |

### 7. Digital Platform Components
| Component | Purpose |
|-----------|---------|
| Peer Feedback App | Quick "Keep/Improve/Question" per Pomodoro block |
| Learning Tracker | Student timeline, cohort leaderboard, corporate reports |
| Peer Button | Text-to-speech instant Q&A for juniors |
| Ekohacks CLI | `ekohacks dojo commit`, `ekohacks dojo dora` |
| Skills Matrix | Junior → Intermediate → Advanced → Mastery progression |

### 8. Business Model
| Tier | Pricing |
|------|---------|
| Workshops (10-20) | $500 flat + $25/student/month |
| Corporate (20+) | $2k setup + $50/student/month |
| Enterprise | $10k/year unlimited + custom reports |

**6-month potential:** $25k+ workshops, $100k+ corporate

### 9. Tools & Integrations
| Category | Tools |
|----------|-------|
| Teaching | Vim, Git/GitHub, Jest |
| Tracking | WakaTime, GitHub Insights, VS Code extensions |
| Platform | React + Chart.js, Node + PostgreSQL, Vercel/Render |
| CLI | Commander.js, simple-git, GitHub CLI wrappers |

---

## Master Relationship Diagram

```
                         ┌─────────────────────┐
                         │   EKOHACKS VISION   │
                         │  Craftsmanship +    │
                         │  Anti-AI + Eco      │
                         └──────────┬──────────┘
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         ↓                          ↓                          ↓
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│  MARKET CONTEXT │       │   CURRICULUM    │       │   MEASUREMENT   │
│  Nigeria Gap    │       │  3WK → 3MO      │       │  DORA + Craft   │
└────────┬────────┘       └────────┬────────┘       └────────┬────────┘
         │                         │                         │
         │                         ↓                         │
         │              ┌─────────────────┐                  │
         │              │    TEACHING     │                  │
         │              │  TDD/Vim/XP/    │                  │
         │              │  NoMocks/Debug  │                  │
         │              └────────┬────────┘                  │
         │                       │                           │
         └───────────────────────┼───────────────────────────┘
                                 │
                                 ↓
                       ┌─────────────────┐
                       │    WORKSHOP     │
                       │  Agenda/Junior/ │
                       │  Interactive    │
                       └────────┬────────┘
                                │
                                ↓
                       ┌─────────────────┐
                       │    DIGITAL      │
                       │    PLATFORM     │
                       └────────┬────────┘
                                │
    ┌───────────┬───────────┬───┴───┬───────────┬───────────┐
    ↓           ↓           ↓       ↓           ↓           ↓
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│  Peer  │ │Learning│ │  Peer  │ │Ekohacks│ │ Skills │
│Feedback│ │Tracker │ │ Button │ │  CLI   │ │ Matrix │
└───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘
    │          │          │          │          │
    └──────────┴──────────┼──────────┴──────────┘
                          │
                          ↓
                 ┌─────────────────┐
                 │  BUSINESS MODEL │
                 │  Workshops →    │
                 │  Corporate →    │
                 │  Enterprise     │
                 └─────────────────┘
```

---

## Implementation Phases

| Phase | Focus | Timeline |
|-------|-------|----------|
| **1. Foundation** | Curriculum + Workshop templates + GitHub standards | Week 1-2 |
| **2. Pilot Tools** | Peer Button (1 day) + DORA spreadsheet + Skills rubric | Week 2-3 |
| **3. Platform MVP** | Learning Tracker + GitHub API + Simple dashboard | Week 3-6 |
| **4. CLI & Automation** | Ekohacks CLI + GitHub Actions + Matrix auto-update | Week 6-7 |
| **5. Scale** | Corporate reporting + White-label + Partners | Week 8+ |

---

## Unique Value Proposition

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   "Ekohacks grads debug production, write tests first,    │
│    and use AI as a junior dev—not a crutch.               │
│    Plus, your cloud bill stays reasonable."               │
│                                                            │
│   Generic bootcamps sell certificates.                    │
│   Ekohacks sells PROOF.                                   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Key Differentiators

| Competitor Approach | Ekohacks Approach |
|---------------------|-------------------|
| AI-assisted coding | AI-free training (builds supervision skills) |
| "Get hired fast" | Deep craftsmanship mastery |
| Course completion certificates | DORA metrics proof of improvement |
| Generic schedules | Islamic prayer-friendly timing |
| IDE dependency | Vim-first discipline |
| Mock-heavy testing | Real collaborators, state-based tests |

---

## Document Statistics

- **Total Lines:** 6,318
- **Major Domains:** 9
- **Distinct Topics:** ~35
- **Platform Components:** 5
- **Teaching Methods:** 6
- **Pricing Tiers:** 3
