import {
  cementData,
  cementPointsData,
  climateData,
  desertificationData,
  erosionPointsData,
  erosionData,
  fireData,
  floodData,
  overgrazingPointsData,
  overgrazingData,
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

export {
  cementLayer,
  climateLayer,
  erosionLayer,
  overgrazingLayer,
  pollutionLayer,
  qualityLayer,
};
