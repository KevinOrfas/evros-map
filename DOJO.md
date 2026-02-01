# Dojo - Gamified Developer Workshop

A companion app for hands-on developer workshops teaching Terminal, Git, Vim, and TDD.

## Workshop Format

- **Duration**: 2-3 weekends (8am-6pm each day)
- **Participants**: CS students, corporate trainees
- **Topics**: Terminal, Git, Vim, TDD
- **Structure**: Weekend sessions + weekday assignments

## Value Propositions

| Value | Description |
|-------|-------------|
| **Progress Tracking** | "Where am I in my learning journey?" |
| **Motivation** | Gamification keeps participants engaged |
| **Proof of Skills** | Tangible evidence of what was learned |
| **Structure** | Clear guidance on what to do next |

## Core Loop

```
Participant completes challenge → XP awarded → Rank updates → Motivation to do more
```

## User Stories

### P0 - Core Loop (Must have for Day 1)

| # | User Story | Value |
|---|------------|-------|
| 1 | As a participant, I want to complete a challenge and see my XP increase | So I feel immediate progress |
| 2 | As a participant, I want to see my current rank/title | So I know my standing |
| 3 | As a participant, I want to see what challenges are available | So I know what to do next |

### P1 - Engagement (Weekend 1)

| # | User Story | Value |
|---|------------|-------|
| 4 | As a participant, I want to see the leaderboard | So I can compare with peers |
| 5 | As a participant, I want to earn badges for achievements | So I have proof of specific skills |
| 6 | As a participant, I want to see my progress through the workshop | So I know how far I've come |

### P2 - Structure (Between Sessions)

| # | User Story | Value |
|---|------------|-------|
| 7 | As a participant, I want to see my weekday assignments | So I know what to practice at home |
| 8 | As a participant, I want to mark assignments complete | So I track my homework |

### P3 - Instructor Tools

| # | User Story | Value |
|---|------------|-------|
| 9 | As an instructor, I want to see all participants' progress | So I know who needs help |
| 10 | As an instructor, I want to assign challenges | So I can customize learning |

## Gamification System

### Ranks

| XP Required | Rank | Title |
|-------------|------|-------|
| 0 - 499 | 1 | Apprentice |
| 500 - 1,499 | 2 | Journeyman |
| 1,500 - 2,999 | 3 | Craftsman |
| 3,000 - 4,999 | 4 | Master |
| 5,000+ | 5 | Sensei |

### XP Sources

| Action | Base XP |
|--------|---------|
| Complete challenge | Varies by difficulty |
| Complete weekday assignment | TBD |
| Earn badge | TBD |

### Badges

TBD - Achievements for specific accomplishments (e.g., "First Commit", "Vim Survivor", "Test Master")

## Tech Stack

- **Frontend**: Vue 3 + Vite + Pinia + Tailwind + DaisyUI
- **Backend**: Fastify + Prisma + PostgreSQL
- **Auth**: Clerk
- **Hosting**: Railway

## Development Approach

1. Test existing functionality (understand what works)
2. Add new features with TDD (Red → Green → Refactor)
3. User stories drive the tests, not technical assumptions

## Deadline

**February 14, 2025**
