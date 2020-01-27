var map = L.map("map", {
  zoomControl: true,
  maxZoom: 28,
  minZoom: 1
}).fitBounds([
  [40.06602200033871, 24.44890103711547],
  [41.75275316854418, 27.36050423859745]
]);

var hash = new L.Hash(map);

map.createPane("paneErosion");
map.getPane("paneErosion").style.zIndex = 402;
map.getPane("paneErosion").style["mix-blend-mode"] = "normal";

map.createPane("paneOvergrazing");
map.getPane("paneOvergrazing").style.zIndex = 401;
map.getPane("paneOvergrazing").style["mix-blend-mode"] = "normal";

map.createPane("paneOvergrazing");
map.getPane("paneOvergrazing").style.zIndex = 402;
map.getPane("paneOvergrazing").style["mix-blend-mode"] = "normal";

map.createPane("paneCement");
map.getPane("paneCement").style.zIndex = 404;
map.getPane("paneCement").style["mix-blend-mode"] = "normal";

map.createPane("panePolution");
map.getPane("panePolution").style.zIndex = 403;
map.getPane("panePolution").style["mix-blend-mode"] = "normal";

map.createPane("paneQuality");
map.getPane("paneQuality").style.zIndex = 406;
map.getPane("paneQuality").style["mix-blend-mode"] = "normal";

map.createPane("paneSurveyMakri");
map.getPane("paneSurveyMakri").style.zIndex = 407;
map.getPane("paneSurveyMakri").style["mix-blend-mode"] = "normal";

const bounds_group = new L.featureGroup([]);

const featureGroupLayers = [
  layerErosion,
  layerOvergrazing,
  layerCement,
  layerPolution
];
featureGroupLayers.forEach(layer => {
  bounds_group.addLayer(layer);
  map.addLayer(layer);
});

var myIcon = name =>
  L.divIcon({
    className: `marker-${name}`,
    iconUrl: `../markers/${name}.svg`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

const getCenterOfPolygon = elm => {
  return turf.centroid(turf.multiPolygon(elm.geometry.coordinates));
};
const swap = (array, i, j) => ([array[i], array[j]] = [array[j], array[i]]);
const swapCoordinates = ({ geometry }) => swap(geometry.coordinates, 0, 1);
const setIcon = name => point => {
  L.marker(point, { icon: myIcon(name) }).addTo(map);
};

// Set up erosion icons
jsonErosion.features
  .map(getCenterOfPolygon)
  .map(swapCoordinates)
  .forEach(setIcon("erosion"));
// Set up overgrazing icons
jsonOvergrazing.features
  .map(getCenterOfPolygon)
  .map(swapCoordinates)
  .forEach(setIcon("overgrazing"));
// Set up cement icons
jsonCement.features
  .map(getCenterOfPolygon)
  .map(swapCoordinates)
  .forEach(setIcon("cement"));

const filterFeatures = filter => feature =>
  feature.properties.category === filter;

const polutionWastes = jsonPolution.features.filter(
  filterFeatures("Ρύπανση από Στερεά Απόβλητα")
);
const jsonPolutionWastes = Object.assign({}, jsonPolution);
jsonPolutionWastes.features = polutionWastes;

const polutionPesticides = jsonPolution.features.filter(
  filterFeatures("Ρύπανση από Φυτοφάρμακα")
);
const jsonPolutionPesticides = Object.assign({}, jsonPolution);
jsonPolutionPesticides.features = polutionPesticides;

const polutionMisc = jsonPolution.features.filter(filterFeatures("ΔΙΑΦΟΡΑ"));
const jsonPolutionMisc = Object.assign({}, jsonPolution);
jsonPolutionMisc.features = polutionMisc;

polutionWastes
  .map(getCenterOfPolygon)
  .map(swapCoordinates)
  .forEach(setIcon("polution-wastes"));

polutionPesticides
  .map(getCenterOfPolygon)
  .map(swapCoordinates)
  .forEach(setIcon("polution-pesticides"));

polutionMisc
  .map(getCenterOfPolygon)
  .map(swapCoordinates)
  .forEach(elm => {
    L.marker(elm).addTo(map);
  });

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
