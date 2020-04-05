import {
  cementData,
  cementPointsData,
  climateData,
  desertificationPointsData,
  erosionPointsData,
  erosionData,
  fireData,
  floodData,
  overgrazingPointsData,
  overgrazingData,
  poisoningPointsData,
  pollutionData,
  qualityData,
} from "../data";
import {
  cementHandler,
  erosionHandler,
  overgrazingHandler,
  pollutionHandler,
} from "./handlers";

import { featureToMarker } from "./helpers";

const setLayerOtpions = (name, color, handler) => {
  return {
    attribution: "",
    interactive: true,
    dataVar: `${name}Data`,
    layerName: `${name}Layer`,
    pane: "erosion",
    style: {
      pane: "erosion",
      opacity: 1,
      color: color,
      dashArray: "",
      lineCap: "butt",
      lineJoin: "miter",
      weight: 1,
      fill: true,
      fillOpacity: 0.5,
      fillColor: color,
      interactive: true,
    },
    onEachFeature: handler,
  };
};

const cementLayer = new L.geoJson(
  cementData,
  setLayerOtpions("cement", "#FBB23E", cementHandler)
);
const climateLayer = new L.geoJson(
  climateData,
  setLayerOtpions("climate", "yellow")
);
const erosionLayer = new L.geoJson(
  erosionData,
  setLayerOtpions("erosion", "#adc378", erosionHandler)
);
const overgrazingLayer = new L.geoJson(
  overgrazingData,
  setLayerOtpions("overgrazing", "#9FC7E8", overgrazingHandler)
);

const pollutionLayer = new L.geoJson(
  pollutionData,
  setLayerOtpions("pollution", "#f788b2", pollutionHandler)
);

const qualityLayer = new L.geoJson(qualityData, {
  attribution: "",
  interactive: true,
  dataVar: "qualityData",
  layerName: "qualityLayer",
  pane: "quality",
  pointToLayer: featureToMarker,
});

const desertificationPointsLayer = new L.geoJson(desertificationPointsData, {
  attribution: "",
  interactive: true,
  dataVar: "desertificationPointsData",
  layerName: "desertificationPointsLayer",
  pointToLayer: featureToMarker,
});

// const layerPoisoningPoints = new L.geoJson(jsonPoisoning, {
//   attribution: "",
//   interactive: true,
//   dataVar: "jsonPoisoning",
//   layerName: "layerPoisoningPoints",
//   pointToLayer: featureToMarker
// });

// const firePointsLayer = new L.geoJson(fireData, {
//   attribution: "",
//   interactive: true,
//   dataVar: "fireData",
//   layerName: "firePointsLayer",
//   pointToLayer: featureToMarker,
// });

// const layerFloodPoints = new L.geoJson(jsonFloodPoints, {
//   attribution: "",
//   interactive: true,
//   dataVar: "jsonFloodPoints",
//   layerName: "layerFloodPoints",
//   pointToLayer: featureToMarker,
// });

export {
  // layerFloodPoints,
  // layerFirePoints,
  desertificationPointsLayer,
  cementLayer,
  climateLayer,
  erosionLayer,
  overgrazingLayer,
  pollutionLayer,
  qualityLayer,
};
