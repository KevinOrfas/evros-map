const map = L.map("map", {
  zoomControl: true,
  maxZoom: 28,
  minZoom: 1
}).fitBounds([
  [40.06602200033871, 24.44890103711547],
  [41.75275316854418, 27.36050423859745]
]);

const hash = new L.Hash(map);

// Pane creation starts
map.createPane("paneErosion");
map.getPane("paneErosion").style.zIndex = 400;
map.getPane("paneErosion").style["mix-blend-mode"] = "normal";

map.createPane("paneOvergrazing");
map.getPane("paneOvergrazing").style.zIndex = 401;
map.getPane("paneOvergrazing").style["mix-blend-mode"] = "normal";

map.createPane("paneCement");
map.getPane("paneCement").style.zIndex = 403;
map.getPane("paneCement").style["mix-blend-mode"] = "normal";

map.createPane("panePollution");
map.getPane("panePollution").style.zIndex = 404;
map.getPane("panePollution").style["mix-blend-mode"] = "normal";

map.createPane("paneClimate");
map.getPane("paneClimate").style.zIndex = 405;
map.getPane("paneClimate").style["mix-blend-mode"] = "normal";

map.createPane("paneQuality");
map.getPane("paneQuality").style.zIndex = 408;
map.getPane("paneQuality").style["mix-blend-mode"] = "normal";

// map.createPane("paneSurveyMakri");
// map.getPane("paneSurveyMakri").style.zIndex = 409;
// map.getPane("paneSurveyMakri").style["mix-blend-mode"] = "normal";
// Pane creation ends

// boundsGroup Starts
// Here we initialise the layers - related with panes
const boundsGroup = new L.featureGroup([]);
const featureGroupLayers = [
  layerErosion,
  layerOvergrazing,
  layerCement,
  layerPollution,
  layerClimate,
  layerDesertificationPoints,
  layerFirePoints,
  // layerPoisoningPoints,
  layerFloodPoints,
  layerQuality
];
featureGroupLayers.forEach(layer => {
  boundsGroup.addLayer(layer);
  map.addLayer(layer);
});
// boundsGroup end

// Set up icons
jsonErosionPoints.features.map(swapCoord).forEach(setIcon("erosion"));
jsonOvergrazingPoints.features.map(swapCoord).forEach(setIcon("overgrazing"));
jsonCementPoints.features.map(swapCoord).forEach(setIcon("cement"));
jsonFire.features.map(swapCoord).forEach(setIcon("fire"));
jsonFloodPoints.features.map(swapCoord).forEach(setIcon("flood"));
jsonDesertPoints.features.map(swapCoord).forEach(setIcon("desertification"));
qualityGood.map(swapCoord).forEach(setIcon("quality-good"));
qualityBad.map(swapCoord).forEach(setIcon("quality-bad"));

jsonPollution.features
  .filter(byFeature("wastes"))
  .map(getCenterOfPolygon)
  .map(swapCoord)
  .forEach(setIcon("wastes"));
jsonPollution.features
  .filter(byFeature("pesticides"))
  .map(getCenterOfPolygon)
  .map(swapCoord)
  .forEach(setIcon("pesticides"));
jsonPollution.features
  .filter(byFeature("other"))
  .map(getCenterOfPolygon)
  .map(swapCoord)
  .forEach(setIcon("pollution"));
// Set up icons

const cementMarkers = document.querySelectorAll(".m-cement");
const erosionMarkers = document.querySelectorAll(".m-erosion");
const overgrazingMarkers = document.querySelectorAll(".m-overgrazing");
const qualityMarkers = document.querySelectorAll(".m-quality");
const fireMarkers = document.querySelectorAll(".m-fire");
const floodMarkers = document.querySelectorAll(".m-flood");
const wastesMarkers = document.querySelectorAll(".m-wastes");
const pesticidesMarkers = document.querySelectorAll(".m-pesticides");
const pollutionMiscMarkers = document.querySelectorAll(".m-pollution");
const desertificationMarkers = document.querySelectorAll(".m-desertification");
const qualityGoodMarkers = document.querySelectorAll(".m-quality-good");
const qualityBadMarkers = document.querySelectorAll(".m-quality-bad");
