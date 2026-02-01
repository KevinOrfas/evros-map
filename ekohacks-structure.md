# Ekohacks Document Structure & Topic Relationships

## Overview
This document maps the 6,318-line `ekohacks.md` file into distinct topic domains with their interconnections.

---

## 1. PHILOSOPHY & VISION

### 1.1 Software Craftsmanship Ethos
**Lines:** ~151-206
- Manifesto values: well-crafted, readable, maintainable code
- "Love your code, love your craft" messaging
- No-AI rule during training sessions
- Pride and ownership in work

### 1.2 Anti-AI Positioning
**Lines:** ~109-147, 1427-1494
- AI lowers value of "just typing code"
- Raises value of design, testing, supervision skills
- "Train with weights on" metaphor
- AI consumption tracking as core value

### 1.3 Eco-Friendly Branding
**Lines:** ~1853-1956
- "Eko" = Lagos + eco-friendly + economical
- Lower AI tokens = lower carbon footprint
- Craft > convenience philosophy
- Measurable AI reduction metrics

**RELATIONS:**
```
[Craftsmanship Ethos] ←→ [Anti-AI Positioning]
         ↓                       ↓
    [Teaching Methods]    [Eco-Friendly Branding]
         ↓                       ↓
    [DORA Metrics] ←──────→ [AI Consumption Tracking]
```

---

## 2. MARKET & CONTEXT

### 2.1 Nigeria Tech Ecosystem Analysis
**Lines:** ~210-254
- Growing bootcamp market (Decagon, Andela, HNG, Switch)
- Gap: depth vs speed in training
- Lagos/Abuja developer community
- Islamic-friendly scheduling need

### 2.2 Competitive Landscape
**Lines:** ~1044-1097
- Global: Software Crafters meetups, Craftsmanship academies
- Local: Nigerian bootcamps focus on "get hired fast"
- Ekohacks niche: uncontested in Nigeria
- Potential partnership with existing bootcamps

### 2.3 Vim Relevance in 2026
**Lines:** ~1427-1494
- Still standard on Unix/Linux servers
- Modal editing productivity benefits
- Community discussions validate continued relevance
- Discipline tool, not fashion choice

**RELATIONS:**
```
[Nigeria Context] → [Competitive Gap] → [Unique Value Proposition]
                           ↓
              [Islamic-Friendly Schedule]
                           ↓
              [Vim as Discipline Tool]
```

---

## 3. CURRICULUM STRUCTURE

### 3.1 Pilot Program (3 Weekends)
**Lines:** ~536-631
- Weekend 1: Planning & Core Craft (TDD basics, tic-tac-toe logic)
- Weekend 2: Integration & Multiplayer (WebSockets, testing w/o mocks)
- Weekend 3: Release & Reflect (load testing, system design, DORA)

### 3.2 Full Bootcamp (3 Months)
**Lines:** ~1784-1830
- Month 1: Foundations & CLI (TDD + Vim + git, HTTP routing)
- Month 2: Data & Real-time (mini ORM, validation, auth, WebSocket)
- Month 3: Hardening & Teaching (error handling, coverage, demo apps)

### 3.3 Warm-Up Exercises
**Lines:** ~1496-1757
- Higher-order functions as entry point
- TDD for `map()` implementation
- Progressive test cases: empty → single → multiple → identity
- Connect to built-in JS API after implementation

### 3.4 Main Project: Multiplayer Tic-Tac-Toe
**Lines:** ~258-332
- Clean domain model (TDD, no network)
- Networked API layer (WebSocket/Socket.IO)
- Load testing and stress experiments
- System design principles in practice

**RELATIONS:**
```
[Warm-Up: map()] → [Tic-Tac-Toe Logic] → [Multiplayer] → [Load Testing]
       ↓                  ↓                   ↓               ↓
   [TDD Basics]    [Testing w/o Mocks]   [System Design]  [DORA Metrics]
       ↓                  ↓                   ↓               ↓
   [3 Weekends] ←───────────────────────────────────────────────┘
       ↓
   [3 Months Bootcamp]
```

---

## 4. TEACHING METHODOLOGIES

### 4.1 Test-Driven Development (TDD)
**Lines:** ~1-106, 1549-1722
- Red-green-refactor cycle
- Commit every green test
- Tests drive design, not implementation
- TDD more valuable in AI era (verification layer)

### 4.2 Testing Without Mocks (James Shore)
**Lines:** ~336-380
- Sociable, state-based tests
- Nullables pattern for real collaborators
- No heavy DI or mocking frameworks
- Tests read like behavior documentation

### 4.3 Vim Mastery
**Lines:** ~51-78, 407-448
- Non-negotiable from day one
- Modes, navigation, editing basics
- Progressive skill levels (beginner → mastery)
- "Vim oath" ritual for identity/belonging

### 4.4 XP Programming Practices
**Lines:** ~536-631
- User stories on whiteboard
- Pair/mob programming with rotation
- Standups and retrospectives
- Continuous integration mindset

### 4.5 Pomodoro Technique
**Lines:** ~454-508
- 25 min focused work + 5 min break
- Quizzes between blocks
- Align with prayer times
- Timer + sound effects for energy

### 4.6 Browser Debugging
**Lines:** ~2244-2399
- DevTools mastery (Console, Sources, Network, Profiler)
- Breakpoints over console.log
- React DevTools integration
- "Debug Olympics" gamification

**RELATIONS:**
```
                    [Teaching Core]
                          │
    ┌─────────┬───────────┼───────────┬─────────┐
    ↓         ↓           ↓           ↓         ↓
  [TDD]   [No Mocks]   [Vim]      [XP]    [Debugging]
    │         │           │           │         │
    └─────────┴───────────┼───────────┴─────────┘
                          ↓
                   [Pomodoro Blocks]
                          ↓
              [Quizzes + Prayer Breaks]
```

---

## 5. WORKSHOP DESIGN

### 5.1 One-Day Workshop Agenda
**Lines:** ~635-791
- Refined XP Engineering Day (9AM-5PM)
- 4 blocks: TDD Core → No-Mocks → Multiplayer → Load/Polish
- Prayer breaks integrated (Dhuhr, Asr, Maghrib)
- DORA retro at end

### 5.2 Junior-Friendly Approach
**Lines:** ~793-902
- 90% guided copying from instructor
- Peer button app for instant Q&A
- Demo → Copy → Practice pattern
- Same deliverables, different path

### 5.3 Competitive Dojo Format
**Lines:** ~1101-1168
- Teams solve same problems under constraints
- Scoring: correctness + craftsmanship + git discipline
- Secret constraints per round
- Learning focus over winning

### 5.4 Interactive Elements
**Lines:** ~454-508, 2244-2399
- Whiteboard user stories
- Live coding demos
- Peer button (text-to-speech Q&A)
- Quiz buzzers between Pomodoros
- "Debug Wall of Shame/Fame"

**RELATIONS:**
```
[Workshop Design]
       │
       ├── [One-Day Agenda] → [Prayer Integration]
       │          ↓
       ├── [Junior Approach] → [Peer Button App]
       │          ↓
       ├── [Competitive Format] → [Scoring System]
       │          ↓
       └── [Interactive Elements] → [Gamification]
```

---

## 6. MEASUREMENT & REPORTING

### 6.1 DORA Metrics Adaptation
**Lines:** ~497-532, 1172-1292
- Deployment Frequency → Commits/green tests per hour
- Lead Time → Test-to-green time
- Change Failure Rate → % broken builds
- MTTR → Time to fix red builds
- Custom: Vim Proficiency %

### 6.2 Craft Metrics
**Lines:** ~1186-1260
- TDD discipline (tests before code)
- Testing quality (readability, state-based)
- Refactoring commits count
- Vim/workflow proficiency self-rating

### 6.3 AI Consumption Tracking
**Lines:** ~1898-1956
- Copilot accept rate target: <20%
- ChatGPT queries: <5/day
- Manual keystrokes: >80%
- "Eco Score" calculation

### 6.4 Data Collection Methods
**Lines:** ~1230-1260, 1294-1376
- From git/CI: commits, timestamps, CI status
- From structured forms: pre/post surveys
- From facilitator: rubric observations
- From WakaTime: time tracking, language usage

### 6.5 Corporate Reporting
**Lines:** ~1243-1262
- Before/after comparisons
- 2-4 page PDF with graphs
- DORA-style summary narrative
- "Elite Performer" badges

**RELATIONS:**
```
[Data Collection]
       │
       ├── [Git/CI Data] ──────┐
       ├── [Surveys/Forms] ────┼── [DORA Metrics]
       ├── [WakaTime] ─────────┤        │
       └── [Facilitator Obs] ──┘        ↓
                                 [Craft Metrics]
                                        │
                    ┌───────────────────┼───────────────────┐
                    ↓                   ↓                   ↓
           [AI Consumption]    [Student Dashboard]   [Corporate Report]
                    │                   │                   │
                    └───────────────────┴───────────────────┘
                                        ↓
                                   [Eco Score]
```

---

## 7. DIGITAL PLATFORM COMPONENTS

### 7.1 Peer Feedback App
**Lines:** ~906-971
- Quick "Keep/Improve/Question" format
- Per-partner, per-block feedback
- Mobile-first, big buttons
- Session summary for facilitator

### 7.2 Ekohacks Learning Tracker
**Lines:** ~2100-2240
- Per-student timeline (commits, time-to-green, AI usage)
- Cohort leaderboard
- Corporate PDF reports
- GitHub + WakaTime integration

### 7.3 Peer Button (Speech Q&A)
**Lines:** ~854-869
- Simple HTML/JS app
- Text-to-speech for instant answers
- Buttons: "TDD Steps?", "Vim Help", "Why No Mocks?"
- Host on Glitch/Netlify, share via QR

### 7.4 Ekohacks CLI
**Lines:** ~6170-6318
- `ekohacks dojo commit --tdd --story "..."`
- `ekohacks dojo dora` (metrics dashboard)
- `ekohacks matrix update` (skill progression)
- GitHub workflow integration

### 7.5 Skills Matrix System
**Lines:** ~5800-6100 (approximate)
- Levels: Junior → Intermediate → Advanced → Mastery
- Categories: Technical Craft, Delivery, Leadership
- Auto-update from git activity
- Visual progression tracking

**RELATIONS:**
```
[Digital Platform]
       │
       ├── [Peer Feedback App] ←─── [Workshop Blocks]
       │
       ├── [Learning Tracker] ←──┬── [GitHub API]
       │          │              ├── [WakaTime API]
       │          │              └── [VS Code Telemetry]
       │          ↓
       │    [Corporate Reports]
       │
       ├── [Peer Button] ←─────── [Junior Sessions]
       │
       ├── [Ekohacks CLI] ←────── [Daily Git Workflow]
       │          │
       │          ↓
       │    [GitHub Actions]
       │
       └── [Skills Matrix] ←───── [Tracker + CLI Data]
```

---

## 8. BUSINESS MODEL

### 8.1 Workshop Pricing
**Lines:** ~2142-2149
- Workshops (10-20 students): $500 flat + $25/student/month
- Corporate cohorts (20+): $2k setup + $50/student/month
- Enterprise: $10k/year unlimited + custom reports

### 8.2 Revenue Projections
**Lines:** ~2203-2206
- 6-month potential: $25k+ workshops, $100k+ corporate
- Break-even: 2 workshops/month

### 8.3 Corporate Value Proposition
**Lines:** ~2179-2196
- Measurable ROI (DORA metrics)
- Individual progress tracking
- Compliance reporting
- "Proof, not certificates"

**RELATIONS:**
```
[Business Model]
       │
       ├── [Workshops] ──────────→ [Tracker Add-on Revenue]
       │
       ├── [Corporate Cohorts] ──→ [Custom Reports]
       │
       └── [Enterprise] ─────────→ [White-label Platform]
                                          │
                                          ↓
                                   [Partner with Bootcamps]
```

---

## 9. TOOLS & INTEGRATIONS

### 9.1 Required Tools
- **Editor:** Vim (mandatory)
- **Version Control:** Git + GitHub
- **Testing:** Jest or equivalent
- **Real-time:** Socket.IO / WebSocket

### 9.2 Tracking Tools (Not Custom-Built)
**Lines:** ~1983-2073
- WakaTime (VS Code + browser)
- GitHub Insights
- VS Code Coding Tracker extension
- ActivityWatch

### 9.3 Platform Stack
**Lines:** ~2126-2139
- Frontend: React + Chart.js
- Backend: Node/Express + PostgreSQL
- Integrations: GitHub API, WakaTime API
- Deployment: Vercel/Netlify + Render

### 9.4 CLI Stack
**Lines:** ~6170-6210
- Commander.js for commands
- simple-git for git operations
- execa for shell commands
- GitHub CLI (gh) wrappers

**RELATIONS:**
```
[Tools Ecosystem]
       │
       ├── [Teaching Tools]
       │      ├── Vim
       │      ├── Git/GitHub
       │      └── Jest
       │
       ├── [Tracking Tools]
       │      ├── WakaTime
       │      ├── GitHub Insights
       │      └── VS Code Extensions
       │
       └── [Platform Tools]
              ├── React + Chart.js (Frontend)
              ├── Node + PostgreSQL (Backend)
              └── GitHub Actions (CI/CD)
```

---

## MASTER RELATIONSHIP DIAGRAM

```
                              ┌─────────────────────┐
                              │   EKOHACKS VISION   │
                              │  (Craftsmanship +   │
                              │   Anti-AI + Eco)    │
                              └──────────┬──────────┘
                                         │
              ┌──────────────────────────┼──────────────────────────┐
              ↓                          ↓                          ↓
    ┌─────────────────┐        ┌─────────────────┐        ┌─────────────────┐
    │  MARKET CONTEXT │        │   CURRICULUM    │        │   MEASUREMENT   │
    │  (Nigeria Gap)  │        │ (3WK → 3MO)     │        │ (DORA + Craft)  │
    └────────┬────────┘        └────────┬────────┘        └────────┬────────┘
             │                          │                          │
             │                          ↓                          │
             │               ┌─────────────────┐                   │
             │               │    TEACHING     │                   │
             │               │   METHODOLOGY   │                   │
             │               │ (TDD/Vim/XP/    │                   │
             │               │  NoMocks/Debug) │                   │
             │               └────────┬────────┘                   │
             │                        │                            │
             └────────────────────────┼────────────────────────────┘
                                      │
                                      ↓
                            ┌─────────────────┐
                            │    WORKSHOP     │
                            │     DESIGN      │
                            │ (Agenda/Junior/ │
                            │  Interactive)   │
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
    ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
    │ Peer    │ │Learning │ │ Peer    │ │Ekohacks │ │ Skills  │
    │Feedback │ │Tracker  │ │ Button  │ │  CLI    │ │ Matrix  │
    │  App    │ │         │ │  (Q&A)  │ │         │ │         │
    └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘
         │           │           │           │           │
         └───────────┴───────────┼───────────┴───────────┘
                                 │
                                 ↓
                        ┌─────────────────┐
                        │  BUSINESS MODEL │
                        │ (Workshops →    │
                        │  Corporate →    │
                        │  Enterprise)    │
                        └─────────────────┘
```

---

## TOPIC INDEX BY LINE RANGES

| Topic | Approx. Lines | Section Count |
|-------|---------------|---------------|
| TDD Basics & AI Era | 1-147 | 2 |
| Craftsmanship Philosophy | 151-206 | 1 |
| Nigeria Market | 210-254 | 1 |
| Tic-Tac-Toe Project | 258-332 | 1 |
| Testing Without Mocks | 336-380 | 1 |
| Building a School | 382-406 | 1 |
| Vim Integration | 407-448 | 1 |
| Prayer/Pomodoro/DORA | 454-532 | 1 |
| 3-Weekend Pilot | 536-631 | 1 |
| One-Day Workshop | 635-791 | 2 |
| Junior Approach | 793-902 | 1 |
| Peer Feedback App | 906-997 | 2 |
| Competition Analysis | 1044-1168 | 2 |
| Metrics & Reporting | 1172-1376 | 3 |
| Vim in 2026 | 1427-1494 | 1 |
| Higher-Order Functions | 1496-1830 | 4 |
| GitHub + Debugging | 1853-2399 | 5 |
| Learning Tracker | 2100-2240 | 1 |
| Browser Debugging | 2244-2399 | 1 |
| Skills Matrix | ~5800-6100 | ~3 |
| CLI Design | 6170-6318 | 1 |

---

## IMPLEMENTATION PRIORITY SUGGESTION

Based on dependencies:

1. **Phase 1: Foundation**
   - Curriculum design (TDD + Vim + No-Mocks)
   - Workshop agenda templates
   - GitHub workflow standards

2. **Phase 2: Pilot Tools**
   - Peer Button app (1 day build)
   - Basic DORA tracking spreadsheet
   - Skills rubric document

3. **Phase 3: Platform MVP**
   - Learning Tracker (2-3 weeks)
   - GitHub API integration
   - Simple dashboard

4. **Phase 4: CLI & Automation**
   - Ekohacks CLI (3-4 days)
   - GitHub Actions workflows
   - Skills Matrix auto-update

5. **Phase 5: Scale**
   - Corporate reporting
   - White-label options
   - Partner integrations
