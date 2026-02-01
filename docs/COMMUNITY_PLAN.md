# Community-Driven Environmental Monitoring Platform

## Vision

Transform Common Ground from a static visualization tool into a living, community-powered platform where residents of Evros actively document, monitor, and protect their local environment.

> **Goal**: Every resident becomes a guardian of their land, contributing local knowledge for the common good.

---

## User Personas

### Maria - The Farmer (Η Αγρότισσα)
- **Age**: 58
- **Location**: Village near Didymoteicho
- **Tech comfort**: Basic smartphone use, WhatsApp
- **Motivation**: Worried about soil erosion on her family's olive groves
- **Needs**: Simple way to report problems, see if others face similar issues

### Dimitris - The Shepherd (Ο Βοσκός)
- **Age**: 45
- **Location**: Mountain villages near Soufli
- **Tech comfort**: Uses smartphone for weather apps
- **Motivation**: Wants to document overgrazing by others, protect his traditional routes
- **Needs**: Offline capability (no signal in mountains), GPS tracking

### Elena - The Teacher (Η Δασκάλα)
- **Age**: 34
- **Location**: Alexandroupoli
- **Tech comfort**: Very comfortable with technology
- **Motivation**: Environmental education for her students, citizen science projects
- **Needs**: Data export for school projects, historical comparisons

### Yiannis - The Fisherman (Ο Ψαράς)
- **Age**: 62
- **Location**: Coastal village near Makri
- **Tech comfort**: Limited, asks grandchildren for help
- **Motivation**: Document pollution affecting fish populations
- **Needs**: Voice notes instead of typing, family member can help submit

### Katerina - The Environmental Activist (Η Ακτιβίστρια)
- **Age**: 28
- **Location**: Orestiada
- **Tech comfort**: Expert
- **Motivation**: Gather evidence for environmental advocacy, hold polluters accountable
- **Needs**: Anonymous reporting, data verification, export for reports

---

## User Stories

### Epic 1: Reporting Environmental Issues

#### US-1.1: Submit a Photo Report
**As a** resident of Evros,
**I want to** take a photo of an environmental problem and submit it with my location,
**So that** the issue is documented and visible to the community.

**Acceptance Criteria:**
- [ ] User can take a photo or select from gallery
- [ ] GPS coordinates are automatically captured
- [ ] User selects a category (pollution, erosion, dumping, etc.)
- [ ] User can add optional description (text or voice)
- [ ] Submission works offline and syncs when connected
- [ ] User receives confirmation that report was submitted

**Priority**: High
**Effort**: Medium

---

#### US-1.2: Report Without an Account
**As a** concerned citizen,
**I want to** submit a report without creating an account,
**So that** I can quickly document an issue without friction.

**Acceptance Criteria:**
- [ ] Anonymous submission option available
- [ ] No email or phone required for anonymous reports
- [ ] Anonymous reports are clearly marked in the system
- [ ] User can optionally provide contact for follow-up

**Priority**: High
**Effort**: Low

---

#### US-1.3: Categorize Environmental Threats
**As a** user submitting a report,
**I want to** select from clear categories in Greek,
**So that** my report is properly classified.

**Acceptance Criteria:**
- [ ] Categories displayed in Greek with icons
- [ ] Main categories: Ρύπανση, Διάβρωση, Υπερβόσκηση, Παράνομη απόρριψη, Πυρκαγιά, Πλημμύρα, Άλλο
- [ ] Subcategories available (e.g., Ρύπανση → Στερεά απόβλητα, Φυτοφάρμακα, Λύματα)
- [ ] "Other" option with free text

**Priority**: High
**Effort**: Low

---

#### US-1.4: Add Severity Rating
**As a** reporter,
**I want to** indicate how serious the problem is,
**So that** urgent issues get attention first.

**Acceptance Criteria:**
- [ ] Simple 3-level scale: Low / Medium / Critical
- [ ] Visual indicators (green/yellow/red)
- [ ] Optional: estimated size/area affected
- [ ] Critical reports flagged for review

**Priority**: Medium
**Effort**: Low

---

#### US-1.5: Voice Description
**As an** older user uncomfortable with typing,
**I want to** record a voice message describing the problem,
**So that** I can contribute without struggling with the keyboard.

**Acceptance Criteria:**
- [ ] Voice recording button on report form
- [ ] Maximum 2-minute recording
- [ ] Playback before submission
- [ ] Voice stored with report (not transcribed initially)

**Priority**: Medium
**Effort**: Medium

---

### Epic 2: Viewing and Exploring Reports

#### US-2.1: View Community Reports on Map
**As a** resident,
**I want to** see all reported environmental issues on the map,
**So that** I understand problems in my area.

**Acceptance Criteria:**
- [ ] New reports appear as markers on the map
- [ ] Different icons for different categories
- [ ] Color coding by severity
- [ ] Clicking marker shows photo, description, date
- [ ] Filter by category, date, severity

**Priority**: High
**Effort**: Medium

---

#### US-2.2: View Reports Near Me
**As a** mobile user,
**I want to** see reports within 5km of my current location,
**So that** I can focus on my immediate area.

**Acceptance Criteria:**
- [ ] "Near Me" button uses device GPS
- [ ] Shows distance to each report
- [ ] Sorted by distance (nearest first)
- [ ] Works on mobile browsers

**Priority**: Medium
**Effort**: Low

---

#### US-2.3: Search by Village Name
**As a** user,
**I want to** search for a village and see reports there,
**So that** I can check on places I care about.

**Acceptance Criteria:**
- [ ] Search box with autocomplete
- [ ] Greek village names supported
- [ ] Map centers on selected village
- [ ] Shows count of reports in that area

**Priority**: Medium
**Effort**: Medium

---

### Epic 3: Community Validation

#### US-3.1: Confirm a Report
**As a** local resident,
**I want to** confirm that a reported issue exists,
**So that** the community knows it's verified.

**Acceptance Criteria:**
- [ ] "I've seen this too" button on each report
- [ ] Shows count of confirmations
- [ ] Reports with 3+ confirmations marked as "Verified"
- [ ] User can only confirm once per report

**Priority**: Medium
**Effort**: Low

---

#### US-3.2: Add Update to Existing Report
**As a** community member,
**I want to** add a follow-up to an existing report,
**So that** we can track if the situation changed.

**Acceptance Criteria:**
- [ ] "Add Update" button on report view
- [ ] Can add new photo showing current state
- [ ] Options: "Still exists", "Getting worse", "Improved", "Resolved"
- [ ] Updates shown as timeline on report

**Priority**: Medium
**Effort**: Medium

---

#### US-3.3: Flag Inappropriate Content
**As a** user,
**I want to** flag reports that are spam or inappropriate,
**So that** the platform stays trustworthy.

**Acceptance Criteria:**
- [ ] Flag button on each report
- [ ] Reason selection: Spam, Incorrect location, Duplicate, Inappropriate
- [ ] Flagged reports reviewed by moderators
- [ ] User not notified when their report is flagged

**Priority**: Low
**Effort**: Low

---

### Epic 4: Offline & Mobile Experience

#### US-4.1: Work Offline
**As a** shepherd in the mountains,
**I want to** save reports when I have no signal,
**So that** they upload automatically when I'm back in range.

**Acceptance Criteria:**
- [ ] Report form works without internet
- [ ] Reports saved to device storage
- [ ] Automatic sync when connection restored
- [ ] Visual indicator showing pending uploads
- [ ] No data loss if app closes

**Priority**: High
**Effort**: High

---

#### US-4.2: Install as App
**As a** mobile user,
**I want to** add Common Ground to my home screen,
**So that** it feels like a native app.

**Acceptance Criteria:**
- [ ] PWA manifest configured
- [ ] "Add to Home Screen" prompt on mobile
- [ ] App icon and splash screen
- [ ] Works in standalone mode (no browser UI)

**Priority**: Medium
**Effort**: Medium

---

### Epic 5: Data & Export

#### US-5.1: Export Data for Research
**As a** teacher or researcher,
**I want to** download report data as a spreadsheet,
**So that** I can analyze it for projects.

**Acceptance Criteria:**
- [ ] Export button on main interface
- [ ] CSV format with all report fields
- [ ] Filter data before export (date range, category, area)
- [ ] Includes coordinates for GIS software

**Priority**: Low
**Effort**: Medium

---

#### US-5.2: View Statistics
**As a** concerned citizen,
**I want to** see summary statistics for my region,
**So that** I understand the overall environmental health.

**Acceptance Criteria:**
- [ ] Dashboard showing: total reports, by category, trend over time
- [ ] Comparison between villages/areas
- [ ] "Hot spots" highlighted on map
- [ ] Monthly/yearly trends

**Priority**: Low
**Effort**: Medium

---

## Feature Priority Matrix

> **Offline-first is non-negotiable** - without it, shepherds and farmers in the mountains cannot use the app.

| Feature | User Value | Effort | Priority |
|---------|-----------|--------|----------|
| **Offline map & tiles** | Critical | High | P0 |
| **Offline report creation** | Critical | Medium | P0 |
| **Local data storage** | Critical | Medium | P0 |
| **Background sync** | Critical | High | P0 |
| PWA install | High | Medium | P0 |
| Photo report submission | High | Medium | P0 |
| GPS location capture | High | Low | P0 |
| Category selection | High | Low | P0 |
| Sync status indicator | High | Low | P0 |
| View synced reports | High | Medium | P1 |
| Anonymous reporting | High | Low | P1 |
| Community confirmation | Medium | Low | P1 |
| Voice descriptions | Medium | Medium | P2 |
| Search by village (offline) | Medium | Medium | P2 |
| Report updates/timeline | Medium | Medium | P2 |
| Data export | Low | Medium | P3 |
| Statistics dashboard | Low | Medium | P3 |

---

## Technical Architecture: Offline-First

> **Critical Requirement**: In the mountains of Evros, there is little to no mobile signal. The app MUST work fully offline and sync when connectivity returns.

### Offline-First Principles

1. **Local-first data** - All data lives on device first, server is just for sync
2. **No loading spinners** - UI responds instantly from local data
3. **Background sync** - Upload happens automatically when online
4. **Conflict resolution** - Handle edits made offline by multiple users
5. **Progressive enhancement** - Core features work offline, extras need connection

### Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    DEVICE (Works 100% Offline)                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    Service Worker                         │   │
│  │  - Caches all app assets (HTML, JS, CSS, icons)          │   │
│  │  - Intercepts network requests                            │   │
│  │  - Queues outgoing requests when offline                  │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                   │
│  ┌──────────────┐  ┌────────┴───────┐  ┌──────────────────┐     │
│  │ Leaflet Map  │  │ IndexedDB      │  │ Report Form      │     │
│  │              │  │                │  │                  │     │
│  │ - Offline    │  │ - All reports  │  │ - Camera API     │     │
│  │   tile cache │  │ - Pending sync │  │ - GPS (offline)  │     │
│  │ - Local      │  │ - User prefs   │  │ - Voice record   │     │
│  │   GeoJSON    │  │ - Map tiles    │  │ - Local save     │     │
│  └──────────────┘  └────────────────┘  └──────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
                              │
                   (When signal available)
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         CLOUD (Sync Only)                       │
│  ┌──────────────┐  ┌────────────────┐  ┌──────────────────┐     │
│  │ Sync API     │  │ Image Storage  │  │ Database         │     │
│  │              │  │                │  │                  │     │
│  │ - Receive    │  │ - Compressed   │  │ - All reports    │     │
│  │   pending    │  │   photos       │  │ - Confirmations  │     │
│  │ - Send new   │  │ - Voice clips  │  │ - User data      │     │
│  │   reports    │  │                │  │                  │     │
│  └──────────────┘  └────────────────┘  └──────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
```

### Offline Capabilities

| Feature | Offline | Notes |
|---------|---------|-------|
| View map | ✅ | Pre-cached tiles for Evros region |
| View existing reports | ✅ | Synced to local IndexedDB |
| Take photos | ✅ | Stored locally |
| Record GPS location | ✅ | Device GPS works without signal |
| Record voice notes | ✅ | Stored as audio blobs |
| Submit new report | ✅ | Queued for sync |
| Confirm others' reports | ✅ | Queued for sync |
| Search villages | ✅ | Local search index |
| See sync status | ✅ | "3 reports pending upload" |

### Sync Strategy

```
User creates report in mountains (offline)
         │
         ▼
┌─────────────────────────┐
│ Report saved to         │
│ IndexedDB with status:  │
│ "pending_sync"          │
└─────────────────────────┘
         │
         │  (Hours later, user returns to village)
         ▼
┌─────────────────────────┐
│ Service Worker detects  │
│ connectivity            │
└─────────────────────────┘
         │
         ▼
┌─────────────────────────┐
│ Background Sync API     │
│ uploads pending reports │
│ (even if app closed)    │
└─────────────────────────┘
         │
         ▼
┌─────────────────────────┐
│ Status updated to       │
│ "synced" with server ID │
└─────────────────────────┘
```

### Technology Stack

**Offline-First Libraries:**
- **Workbox** - Google's Service Worker toolkit
- **Dexie.js** - IndexedDB wrapper (easier than raw API)
- **Background Sync API** - Upload when back online

**Map Tiles (Offline):**
- Pre-download Evros region tiles at install
- ~50-100MB for zoom levels 8-16
- Option to download specific village areas

**Backend (Sync-friendly):**
- **PouchDB + CouchDB** - Built for offline-first sync
- **Supabase** - Good offline support with local-first plugins
- **Firebase** - Firestore has offline persistence

**Compression:**
- Photos resized to 1200px max before storage
- JPEG quality 80% (good balance)
- Voice clips compressed to Opus format

---

## Phases

### Phase 1: Offline-First Foundation (6-8 weeks)
> *Build the core offline infrastructure first - everything else depends on it*

- [ ] Service Worker setup with Workbox
- [ ] IndexedDB schema for reports, sync queue
- [ ] Offline map tiles for Evros region
- [ ] Basic report form (photo + GPS + category)
- [ ] Local storage of reports
- [ ] PWA manifest and install prompt
- [ ] "Pending sync" indicator in UI

**Deliverable**: App that works 100% offline in the mountains

### Phase 2: Sync & Backend (4-6 weeks)
- [ ] Choose backend (PouchDB/CouchDB recommended for sync)
- [ ] Background sync when online
- [ ] Conflict resolution strategy
- [ ] Image upload with compression
- [ ] View community reports (synced from server)
- [ ] Anonymous submission flow

**Deliverable**: Reports sync reliably when shepherds return to village

### Phase 3: Community Features (4-6 weeks)
- [ ] Confirmation/voting on reports
- [ ] Report updates and timeline
- [ ] Voice descriptions (offline recording)
- [ ] Village search (offline index)
- [ ] Basic moderation tools

**Deliverable**: Community can validate and update reports

### Phase 4: Polish & Scale (4-6 weeks)
- [ ] Push notifications for nearby issues
- [ ] Statistics dashboard
- [ ] Data export for researchers
- [ ] Multi-language (full Greek/English)
- [ ] Accessibility improvements
- [ ] Performance optimization

**Deliverable**: Production-ready community platform

---

## Success Metrics

- **Adoption**: Number of unique contributors per month
- **Coverage**: % of Evros villages with at least one report
- **Engagement**: Reports per contributor, confirmations per report
- **Quality**: % of reports verified by community
- **Impact**: Issues resolved after being reported

---

## Next Steps

1. [ ] Validate user stories with local residents
2. [ ] Choose backend technology
3. [ ] Design mobile-first report form UI
4. [ ] Build Phase 1 MVP
5. [ ] Pilot with 2-3 villages
6. [ ] Gather feedback and iterate
