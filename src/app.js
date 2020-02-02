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

map.createPane("panePolutionWastes");
map.getPane("panePolutionWastes").style.zIndex = 404;
map.getPane("panePolutionWastes").style["mix-blend-mode"] = "normal";

map.createPane("panePolutionPesticides");
map.getPane("panePolutionPesticides").style.zIndex = 405;
map.getPane("panePolutionPesticides").style["mix-blend-mode"] = "normal";

map.createPane("panePolutionMisc");
map.getPane("panePolutionMisc").style.zIndex = 410;
map.getPane("panePolutionMisc").style["mix-blend-mode"] = "normal";

map.createPane("paneDesertification");
map.getPane("paneDesertification").style.zIndex = 406;
map.getPane("paneDesertification").style["mix-blend-mode"] = "normal";

map.createPane("paneQuality");
map.getPane("paneQuality").style.zIndex = 408;
map.getPane("paneQuality").style["mix-blend-mode"] = "normal";

map.createPane("paneSurveyMakri");
map.getPane("paneSurveyMakri").style.zIndex = 409;
map.getPane("paneSurveyMakri").style["mix-blend-mode"] = "normal";
// Pane creation ends

// boundsGroup Starts
const boundsGroup = new L.featureGroup([]);
const featureGroupLayers = [
  layerErosion,
  layerOvergrazing,
  layerCement,
  layerPolutionWastes,
  layerPolutionPesticides,
  layerPolutionMisc,
  layerOvergrazingPoints,
  layerDesertificationPoints,
  layerFirePoints,
  layerFloodPoints
];
featureGroupLayers.forEach(layer => {
  boundsGroup.addLayer(layer);
  map.addLayer(layer);
});
// boundsGroup end

// // Set up icons
jsonErsosionPoints.features.map(swapCoord).forEach(setIcon("erosion"));
jsonOvergrazingPoints.features.map(swapCoord).forEach(setIcon("overgrazing"));
jsonCementificationPoints.features.map(swapCoord).forEach(setIcon("cement"));
jsonFirePoints.features.map(swapCoord).forEach(setIcon("fire"));
jsonFloodPoints.features.map(swapCoord).forEach(setIcon("flood"));
jsonDesertificationPoints.features
  .map(swapCoord)
  .forEach(setIcon("desertification"));

polutionWastes
  .map(getCenterOfPolygon)
  .map(swapCoord)
  .forEach(setIcon("wastes"));
polutionPesticides
  .map(getCenterOfPolygon)
  .map(swapCoord)
  .forEach(setIcon("pesticides"));
polutionMisc
  .map(getCenterOfPolygon)
  .map(swapCoord)
  .forEach(setIcon("polution"));

const cementMarkers = document.querySelectorAll(".m-cement");
const erosionMarkers = document.querySelectorAll(".m-erosion");
const overgrazingMarkers = document.querySelectorAll(".m-overgrazing");
const qualityMarkers = document.querySelectorAll(".m-quality");
const fireMarkers = document.querySelectorAll(".m-fire");
const floodMarkers = document.querySelectorAll(".m-flood");
const wastesMarkers = document.querySelectorAll(".m-wastes");
const pesticidesMarkers = document.querySelectorAll(".m-pesticides");
const polutionMiscMarkers = document.querySelectorAll(".m-polution");
const desertificationMarkers = document.querySelectorAll(".m-desertification");

const info = L.control({ position: "bottomright" });
info.onAdd = map => {
  info._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
  info.update();
  return info._div;
};
info.update = props => {
  info._div.innerHTML =
    "<h4>Info</h4>" +
    (props
      ? `<b>${props.village}</b> <br /> ${props.comment}`
      : "Hover over an area");
};

info.addTo(map);
