var map = L.map("map", {
  zoomControl: true,
  maxZoom: 28,
  minZoom: 1
}).fitBounds([
  [40.06602200033871, 24.44890103711547],
  [41.75275316854418, 27.36050423859745]
]);

var hash = new L.Hash(map);

var bounds_group = new L.featureGroup([]);

map.createPane("pane_erosion_1");
map.getPane("pane_erosion_1").style.zIndex = 401;
map.getPane("pane_erosion_1").style["mix-blend-mode"] = "normal";

bounds_group.addLayer(layer_erosion_1);
map.addLayer(layer_erosion_1);
