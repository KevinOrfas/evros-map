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

map.createPane("paneOvergrazing");
map.getPane("paneOvergrazing").style.zIndex = 402;
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

map.createPane("paneDesertification");
map.getPane("paneDesertification").style.zIndex = 406;
map.getPane("paneDesertification").style["mix-blend-mode"] = "normal";

// paneFirePoints

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
  layerDesertification,
  layerFirePoints
];
featureGroupLayers.forEach(layer => {
  boundsGroup.addLayer(layer);
  map.addLayer(layer);
});
// boundsGroup end

// Set up icons
jsonErsosionPoints.features.map(swapCoord).forEach(setIcon("erosion"));
jsonOvergrazingPoints.features.map(swapCoord).forEach(setIcon("overgrazing"));
jsonCementificationPoints.features.map(swapCoord).forEach(setIcon("cement"));
jsonFirePoints.features.map(swapCoord).forEach(setIcon("fire"));
jsonDesertificationPoints.features
  .map(swapCoord)
  .forEach(setIcon("desertification"));

polutionWastes
  .map(getCenterOfPolygon)
  .map(swapCoord)
  .forEach(setIcon("polution-wastes"));

polutionPesticides
  .map(getCenterOfPolygon)
  .map(swapCoord)
  .forEach(setIcon("polution-pesticides"));

// polutionMisc
//   .map(getCenterOfPolygon)
//   .map(swapCoord)
//   .forEach(elm => {
//     L.marker(elm).addTo(map);
//   });

const info = L.control({ position: "topright" });

info.onAdd = function(map) {
  this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
  this.update();
  return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function(props) {
  console.log(props);
  this._div.innerHTML =
    "<h4>Info</h4>" +
    (props
      ? `<b>${props.village}</b> <br /> ${props.comment}`
      : "Hover over an area");
};

info.addTo(map);

const cementMarkers = document.querySelectorAll(".marker-cement");
const erosionMarkers = document.querySelectorAll(".marker-erosion");
const overgrazingMarkers = document.querySelectorAll(".marker-overgrazing");

const qualityMarkers = document.querySelectorAll(".marker-quality");
const polutionWastesMarkers = document.querySelectorAll(
  ".marker-polution-wastes"
);
const polutionPesticidesMarkers = document.querySelectorAll(
  ".marker-polution-pesticides"
);
const desertificationMarkers = document.querySelectorAll(
  ".marker-desertification"
);

const fireMarkers = document.querySelectorAll(".marker-fire");

// cementMarkers.forEach(marker => marker.classList.add("marker-hidden"));
// erosionMarkers.forEach(marker => marker.classList.add("marker-hidden"));
// qualityMarkers.forEach(marker => marker.classList.add("marker-hidden"));
// polutionWastesMarkers.forEach(marker => marker.classList.add("marker-hidden"));
// polutionPesticidesMarkers.forEach(marker =>
//   marker.classList.add("marker-hidden")
// );
// overgrazingMarkers.forEach(marker => marker.classList.add("marker-hidden"));
