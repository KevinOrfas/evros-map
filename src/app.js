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
map.getPane("paneErosion").style.zIndex = 401;
map.getPane("paneErosion").style["mix-blend-mode"] = "normal";

map.createPane("paneOvergrazing");
map.getPane("paneOvergrazing").style.zIndex = 402;
map.getPane("paneOvergrazing").style["mix-blend-mode"] = "normal";

var bounds_group = new L.featureGroup([]);

bounds_group.addLayer(layerErosion, { style: style });
map.addLayer(layerErosion);

bounds_group.addLayer(layerOvergrazing);
map.addLayer(layerOvergrazing);

var info = L.control({ position: "topright" });

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

// console.log(jsonErosion.features[0].geometry.coordinates);
// var polygon = turf.multiPolygon(
//   jsonErosion.features[0].geometry.coordinates
// );
// var centroid = turf.centroid(polygon);
// console.log(centroid);

// L.marker(centroid.geometry.coordinates).addTo(map);
