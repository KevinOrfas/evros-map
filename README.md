# Common Ground (Κοινό Έδαφος)

An interactive web-based mapping application for monitoring and visualizing environmental degradation and land quality issues in the Evros region, Greece.

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

## License

All rights reserved.
