var map = L.map("map", {
  zoomControl: true,
  maxZoom: 28,
  minZoom: 1
}).fitBounds([
  [40.06602200033871, 24.44890103711547],
  [41.75275316854418, 27.36050423859745]
]);
// .setView([41.75275316854418, 27.36050423859745], 9);

var hash = new L.Hash(map);

map.createPane("pane_erosion_1");
map.getPane("pane_erosion_1").style.zIndex = 401;
map.getPane("pane_erosion_1").style["mix-blend-mode"] = "normal";

map.createPane("pane_iperboskisi_2");
map.getPane("pane_iperboskisi_2").style.zIndex = 402;
map.getPane("pane_iperboskisi_2").style["mix-blend-mode"] = "normal";

var bounds_group = new L.featureGroup([]);

// bounds_group.addLayer(layerErosion, { style: style });
// map.addLayer(layerErosion);

bounds_group.addLayer(layer_iperboskisi_2);
map.addLayer(layer_iperboskisi_2);

function getColor(d) {
  return d > 1000
    ? "#800026"
    : d > 500
    ? "#BD0026"
    : d > 200
    ? "#E31A1C"
    : d > 100
    ? "#FC4E2A"
    : d > 50
    ? "#FD8D3C"
    : d > 20
    ? "#FEB24C"
    : d > 10
    ? "#FED976"
    : "#FFEDA0";
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7
  };
}

function iconByName(name) {
  return '<i class="icon icon-' + name + '"></i>';
}

// function featureToMarker(feature, latlng) {
//   return L.marker(latlng, {
//     icon: L.divIcon({
//       className: "marker-" + feature.properties.amenity,
//       html: iconByName(feature.properties.amenity),
//       iconUrl: "../images/markers/" + feature.properties.amenity + ".png",
//       iconSize: [25, 41],
//       iconAnchor: [12, 41],
//       popupAnchor: [1, -34],
//       shadowSize: [41, 41]
//     })
//   });
// }

function featureToMarker(feature, latlng) {
  console.log({ latlng });
  console.log("egere", iconByName("erosion"));
  return L.marker(latlng, {
    icon: L.divIcon({
      className: "marker-" + "erosion",
      html: iconByName("erosion"),
      iconUrl: "../icons/" + "erosion" + ".png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })
  });
}

var overLayers = [
  {
    name: "Erosion",
    icon: iconByName("erosion"),
    layer: L.geoJson(jsonErosion, {
      pointToLayer: featureToMarker
    })
  }
  // {
  //   name: "ypervoskisi",
  //   icon: iconByName("erosion"),
  //   layer: L.geoJson(json_erosion, {
  //     pointToLayer: featureToMarker
  //   })
  // }
];
var panelLayers = new L.Control.PanelLayers(null, overLayers);

// console.log(jsonErosion.features[0].geometry.coordinates);
// var polygon = turf.multiPolygon(
//   jsonErosion.features[0].geometry.coordinates
// );
// var centroid = turf.centroid(polygon);
// console.log(centroid);

// L.marker(centroid.geometry.coordinates).addTo(map);

map.addControl(panelLayers);
