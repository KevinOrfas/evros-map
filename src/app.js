import "./helpers";
import { conf, panelLayers } from "./controls";
import {
  cementLayer,
  climateLayer,
  erosionLayer,
  overgrazingLayer,
  pollutionLayer,
  qualityLayer,
} from "./layers";

const map = L.map("map", {
  zoomControl: true,
  maxZoom: 28,
  minZoom: 1,
}).fitBounds([
  [40.06602200033871, 24.44890103711547],
  [41.75275316854418, 27.36050423859745],
]);
// const hash = new L.Hash(map);

map.addControl(panelLayers);
L.control
  .panelLayers(conf.base.layers, null, {
    title: conf.base.title,
    compact: true,
    // position: "bottomright"
  })
  .addTo(map);

const scale = L.control.scale().addTo(map);

// Pane creation starts
map.createPane("erosion");
map.getPane("erosion").style.zIndex = 400;
map.getPane("erosion").style["mix-blend-mode"] = "normal";

map.createPane("overgrazing");
map.getPane("overgrazing").style.zIndex = 401;
map.getPane("overgrazing").style["mix-blend-mode"] = "normal";

map.createPane("cement");
map.getPane("cement").style.zIndex = 403;
map.getPane("cement").style["mix-blend-mode"] = "normal";

map.createPane("pollution");
map.getPane("pollution").style.zIndex = 404;
map.getPane("pollution").style["mix-blend-mode"] = "normal";

map.createPane("climate");
map.getPane("climate").style.zIndex = 405;
map.getPane("climate").style["mix-blend-mode"] = "normal";

map.createPane("quality");
map.getPane("quality").style.zIndex = 408;
map.getPane("quality").style["mix-blend-mode"] = "normal";

// map.createPane("paneSurveyMakri");
// map.getPane("paneSurveyMakri").style.zIndex = 409;
// map.getPane("paneSurveyMakri").style["mix-blend-mode"] = "normal";
// Pane creation ends

// boundsGroup Starts
// Here we initialise the layers - related with panes
const boundsGroup = new L.featureGroup([]);
const featureGroupLayers = [
  cementLayer,
  climateLayer,
  erosionLayer,
  overgrazingLayer,
  pollutionLayer,
  qualityLayer,
  // layerDesertificationPoints,
  // layerFirePoints,
  // layerPoisoningPoints,
  // layerFloodPoints,
];
featureGroupLayers.forEach((layer) => {
  boundsGroup.addLayer(layer);
  map.addLayer(layer);
});
// boundsGroup end

// Set up icons
// jsonErosionPoints.features.map(swapCoord).forEach(pinIcon("erosion"));
// jsonOvergrazingPoints.features.map(swapCoord).forEach(pinIcon("overgrazing"));
// cementPointsData.features.map(swapCoord).forEach(pinIcon("cement"));
// fireData.features.map(swapCoord).forEach(pinIcon("fire"));
// jsonFloodPoints.features.map(swapCoord).forEach(pinIcon("flood"));
// desertPointsData.features.map(swapCoord).forEach(pinIcon("desertification"));
// qualityData.features
//   .filter(byCategory("good", "quality"))
//   .map(swapCoord)
//   .forEach(pinIcon("quality-good"));
// qualityData.features
//   .filter(byCategory("bad", "quality"))
//   .map(swapCoord)
//   .forEach(pinIcon("quality-bad"));
// pollutionData.features
//   .filter(byFeature("wastes"))
//   .map(getCenterOfPolygon)
//   .map(swapCoord)
//   .forEach(pinIcon("wastes"));
// pollutionData.features
//   .filter(byFeature("pesticides"))
//   .map(getCenterOfPolygon)
//   .map(swapCoord)
//   .forEach(pinIcon("pesticides"));
// pollutionData.features
//   .filter(byFeature("other"))
//   .map(getCenterOfPolygon)
//   .map(swapCoord)
//   .forEach(pinIcon("pollution"));
// Set up icons
