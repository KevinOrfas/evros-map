# Common Ground - Development TODO

## Completed

### Phase 1: PWA Foundation ✅
- [x] Service Worker with Workbox
- [x] Offline asset caching (38.9MB precached)
- [x] Map tile caching (Google, OSM, Earth Engine)
- [x] Web App Manifest
- [x] Installable on mobile/desktop
- [x] Works offline after first load

### Phase 2: Report UI ✅
- [x] Floating "Αναφορά" button
- [x] Modal report form
- [x] Photo capture (camera/gallery)
- [x] Auto GPS location capture
- [x] 9 environmental categories (Greek)
- [x] Severity rating (Low/Medium/High)
- [x] Optional description field
- [x] Save to IndexedDB
- [x] Pending reports badge

### Phase 3: Sync Infrastructure ✅
- [x] Online/offline detection
- [x] Connection status indicator
- [x] Background Sync API registration
- [x] Auto-sync on reconnection
- [x] Toast notifications
- [x] Service Worker sync events

---

## In Progress

### Backend Integration
- [ ] Choose backend: PouchDB/CouchDB vs Sanity vs Supabase
- [ ] Set up database schema for reports
- [ ] Connect sync service to backend API
- [ ] Image upload handling
- [ ] Test sync with real backend

---

## TODO

### Phase 4: Display Reports on Map
- [ ] Fetch synced reports from backend
- [ ] Show user reports as map markers
- [ ] Different icons by category
- [ ] Popup with report details and photo
- [ ] Filter by category/date/severity

### Phase 5: Community Features
- [ ] Confirm/upvote reports ("I've seen this too")
- [ ] Report updates/timeline
- [ ] Basic moderation (flag inappropriate)
- [ ] Report status (pending, verified, resolved)

### Phase 6: Polish
- [ ] Proper PWA icons (192x192, 512x512 PNG)
- [ ] Image compression before storage
- [ ] Voice description recording
- [ ] Search by village name
- [ ] Multilingual support (full EN/GR)

### Technical Debt
- [ ] Add unit tests (Vitest)
- [ ] Fix ESLint peer dependency conflicts
- [ ] Merge code-splitting improvements from feature branch
- [ ] Optimize bundle size (currently ~960KB)
- [ ] Lazy load report module

### Infrastructure
- [ ] Set up CI/CD pipeline
- [ ] Configure staging/production environments
- [ ] Error monitoring (Sentry or similar)
- [ ] Analytics (privacy-respecting)

---

## Ideas for Future

- [ ] Native mobile app (Capacitor/React Native)
- [ ] Integration with official environmental databases
- [ ] Satellite imagery change detection
- [ ] Weather/air quality overlays
- [ ] Notification system for nearby reports
- [ ] Export data for researchers (GeoJSON/CSV)
- [ ] Gamification (badges for contributors)
- [ ] Village leaderboards

---

## Notes

### Offline-First Priority
The app must work fully offline in mountain areas with no signal. All features should:
1. Work locally first
2. Sync when connection available
3. Handle conflicts gracefully

### Target Users
- Farmers (soil quality, erosion)
- Shepherds (overgrazing)
- Fishermen (water pollution)
- Teachers (citizen science)
- Activists (documentation)

### Key Metric
> Every resident of Evros becomes a guardian of their land.
