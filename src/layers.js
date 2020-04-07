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
  qualityHandler,
} from "./handlers";

import { featureToMarker } from "./helpers";

const setLayerOptions = (name, color, handler) => {
  return {
    attribution: "",
    interactive: true,
    dataVar: `${name}Data`,
    layerName: `${name}Layer`,
    pane: `${name}`,
    style: {
      pane: `${name}`,
      opacity: 1,
      color: color,
      // radius: 7.2,
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
  setLayerOptions("cement", "#FBB23E", cementHandler)
);
const climateLayer = new L.geoJson(
  climateData,
  setLayerOptions("climate", "yellow")
);
const erosionLayer = new L.geoJson(
  erosionData,
  setLayerOptions("erosion", "#adc378", erosionHandler)
);
const overgrazingLayer = new L.geoJson(
  overgrazingData,
  setLayerOptions("overgrazing", "#9FC7E8", overgrazingHandler)
);

const pollutionLayer = new L.geoJson(
  pollutionData,
  setLayerOptions("pollution", "#f788b2", pollutionHandler)
);

const qualityLayer = new L.geoJson(qualityData, {
  ...setLayerOptions("overgrazing", "blue", qualityHandler),
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
