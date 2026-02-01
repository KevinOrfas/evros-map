# Common Ground (Κοινό Έδαφος)

[![Ekohacks Open Source](https://img.shields.io/badge/Ekohacks-Open%20Source-green)](https://ekohacks.com)

An interactive web-based mapping application for monitoring and visualising environmental degradation and land quality issues in the Evros region, Greece.

> **Part of the [Ekohacks](https://ekohacks.com) open source ecosystem** — where software craftsmanship meets environmental consciousness.

## Overview

Common Ground provides comprehensive mapping of environmental threats and land quality assessments through an interactive map interface. Users can explore different environmental risk zones with detailed information, field photographs, and comments about each location.

## Features

### Environmental Threat Categories

- **Cement/Urbanization Trends** (Τάσεις Τσιμεντοποίηση) - Areas with concrete expansion and urbanization
- **Climate-Related Hazards** (Ακραία καιρικά φαινόμενα)
  - Desertification risk
  - Flood risk
  - Fire risk
- **Soil Degradation**
  - Erosion risk
  - Overgrazing
- **Pollution** (Ρύπανση)
  - Waste/Landfill pollution (with field photographs)
  - Pesticide contamination
- **Land Quality Assessment** (Ποιότητα τόπου) - Good and bad quality areas
- **Forest Loss** - Integration with Google Earth Engine Hansen forest loss data

### Interactive Capabilities

- Toggle layers on/off for different environmental indicators
- Click features for detailed popup information
- Hover effects to highlight areas
- Zoom-to-feature functionality
- Multiple base maps (Google Satellite, OpenStreetMap)
- Collapsible layer panels with subcategories
- URL hash-based navigation for sharing specific map views

## Data Labelling

This application includes rich data labelling functionality:

- **Spatial Classification**: Polygons and points labelled with environmental threat categories
- **Photographic Documentation**: Pollution sites include field photographs as visual evidence
- **Qualitative Annotations**: Detailed comments explaining conditions at each location
- **Quality Assessments**: Features categorized by land quality (good/bad) with supporting descriptions
- **Village Attribution**: Data organized by village location

## Tech Stack

- **Leaflet.js** - Core mapping library
- **Webpack** - Module bundler
- **Babel** - ES6+ transpilation
- **SASS/SCSS** - CSS preprocessing

### Leaflet Plugins

- leaflet-hash (URL state persistence)
- leaflet-svg-shape-markers
- leaflet.pattern
- Custom leaflet-panel-layers control

## Project Structure

```
evros-map/
├── src/
│   ├── app.js              # Main entry point
│   ├── handlers.js         # Map event handlers
│   ├── layers.js           # GeoJSON layer definitions
│   ├── controls.js         # Layer control configuration
│   ├── helpers.js          # Utility functions
│   ├── translations.js     # Greek/English translations
│   ├── icons/              # SVG icons for threat types
│   └── images/             # Field photographs
├── data/                   # GeoJSON data files
│   ├── cement.js
│   ├── climate.js
│   ├── erosion.js
│   ├── overgrazing.js
│   ├── pollution.js
│   ├── quality.js
│   └── ...
└── webpack.config.js
```

## Getting Started

### Prerequisites

- Node.js (v12 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Starts the Webpack dev server with hot module replacement.

### Production Build

```bash
npm run build
```

Generates optimized production bundle in the `dist/` folder.

## Data Format

Environmental data is stored in GeoJSON format with:

- **Geometry types**: Polygons (MultiPolygon), Points
- **Properties**: Village names, categories, quality assessments, comments, image references
- **Coordinate system**: WGS84

## Roadmap

### Community-Driven Data Collection

The heart of Common Ground is **citizen participation**. We're building features to empower residents of Evros to document and protect their local environment:

#### Report Environmental Issues
- **Photo documentation** - Capture pollution, illegal dumping, or land degradation with your phone
- **GPS location tagging** - Automatically pinpoint exact locations of environmental threats
- **Categorization** - Classify issues (waste, erosion, overgrazing, water pollution, etc.)
- **Severity assessment** - Rate the urgency of environmental problems
- **Anonymous reporting** - Protect whistleblowers reporting illegal activities

#### Local Knowledge Integration
- **Traditional land use mapping** - Document historical farming practices and grazing routes
- **Water source monitoring** - Track the health of local springs, rivers, and wells
- **Biodiversity observations** - Record wildlife sightings and habitat changes
- **Seasonal changes** - Document how the land changes across seasons and years

#### Community Validation
- **Peer review** - Local residents verify and confirm reported issues
- **Before/after comparisons** - Track whether problems are being addressed
- **Success stories** - Celebrate restoration and conservation wins

### For the Common Good (Για το Κοινό Καλό)

This platform exists to serve the people of Evros. Your local knowledge is invaluable:

- **Farmers** - Share observations about soil quality, erosion, and water availability
- **Shepherds** - Document overgrazing impacts and sustainable grazing areas
- **Fishermen** - Report water pollution and changes in river/coastal ecosystems
- **Hikers & nature lovers** - Capture forest health, wildlife, and illegal activities
- **Village elders** - Preserve traditional ecological knowledge before it's lost

> *"Η γη δεν μας ανήκει, την δανειζόμαστε από τα παιδιά μας"*
> *"The land doesn't belong to us, we borrow it from our children"*

### Technical Improvements

#### Performance
- [ ] Lazy load GeoJSON data (load layers on demand)
- [ ] Image optimization and compression
- [ ] Progressive Web App (PWA) for offline access

#### Features
- [ ] Search by village name or coordinates
- [ ] Filter by category, severity, and date
- [ ] User contribution form for new reports
- [ ] Timeline view showing changes over time
- [ ] Export data as GeoJSON/CSV for researchers
- [ ] Multilingual support (complete EN/GR translations)

#### Data & Integration
- [ ] Integration with satellite imagery for change detection
- [ ] Weather data overlay
- [ ] Air quality monitoring integration
- [ ] Connection to official environmental databases

#### Community Tools
- [ ] User accounts for contributors
- [ ] Moderation system for data quality
- [ ] Notification system for new issues in your area
- [ ] Mobile app for field data collection

## Contributing

We welcome contributions from:
- **Local residents** with environmental observations
- **Developers** who want to improve the platform
- **Researchers** studying environmental issues in the region
- **Translators** for multilingual support
- **Designers** for better user experience

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Contact

- **Ekohacks**: [ekohacks.com](https://ekohacks.com)
- **Report Issues**: [GitHub Issues](https://github.com/ekohacks/evros-map/issues)

## License

All rights reserved.
