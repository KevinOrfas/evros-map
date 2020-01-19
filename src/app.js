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
// map.getPane("paneErosion").style["mix-blend-mode"] = "normal";

map.createPane("paneOvergrazing");
map.getPane("paneOvergrazing").style.zIndex = 402;
map.getPane("paneOvergrazing").style["mix-blend-mode"] = "normal";

map.createPane("paneOvergrazing");
map.getPane("paneOvergrazing").style.zIndex = 402;
map.getPane("paneOvergrazing").style["mix-blend-mode"] = "normal";

map.createPane("paneCement");
map.getPane("paneCement").style.zIndex = 404;
map.getPane("paneCement").style["mix-blend-mode"] = "normal";

map.createPane("paneQuality");
map.getPane("paneQuality").style.zIndex = 406;
map.getPane("paneQuality").style["mix-blend-mode"] = "normal";

// map.createPane("panePolution");
// map.getPane("panePolution").style.zIndex = 403;
// map.getPane("panePolution").style["mix-blend-mode"] = "normal";

map.createPane("paneSurveyMakri");
map.getPane("paneSurveyMakri").style.zIndex = 407;
map.getPane("paneSurveyMakri").style["mix-blend-mode"] = "normal";

var bounds_group = new L.featureGroup([]);

// bounds_group.addLayer(layerErosion, { style: style });
// map.addLayer(layerErosion);

// bounds_group.addLayer(layerOvergrazing);
// map.addLayer(layerOvergrazing);

// bounds_group.addLayer(layerCement);
// map.addLayer(layerCement);

// var layerPolution = new L.geoJson.multiStyle(jsonPolution, {
//   attribution: "",
//   interactive: true,
//   dataVar: "jsonPolution",
//   layerName: "layerPolution",
//   pane: "panePolution",
//   onEachFeature: pop_polution_3,
//   styles: [style_polution_1, style_polution_2]
// });

// bounds_group.addLayer(layerPolution);
// map.addLayer(layerPolution);

// var pattern_polution_3_0 = new L.StripePattern({
//   weight: 0.3,
//   spaceWeight: 2.0,
//   color: "#ff1ff1",
//   opacity: 1.0,
//   spaceOpacity: 0,
//   angle: 225
// });
// pattern_polution_3_0.addTo(map);
// var pattern_polution_3_0 = new L.StripePattern({
//   weight: 0.3,
//   spaceWeight: 2.0,
//   color: "#e41a1c",
//   opacity: 1.0,
//   spaceOpacity: 0,
//   angle: 315
// });
// pattern_polution_3_0.addTo(map);
// var pattern_polution_3_0 = new L.StripePattern({
//   weight: 0.3,
//   spaceWeight: 2.0,
//   color: "#ff1ff1",
//   opacity: 1.0,
//   spaceOpacity: 0,
//   angle: 225
// });
// pattern_polution_3_0.addTo(map);

// function style_polution_1(feature) {
//   switch (String(feature.properties["category"])) {
//     case "ΔΙΑΦΟΡΑ":
//       return {
//         pane: "panePolution",
//         stroke: false,
//         fillOpacity: 1,
//         fillPattern: pattern_polution_3_0,
//         interactive: true
//       };
//       break;
//     case "Ρύπανση από Στερεά Απόβλητα":
//       return {
//         pane: "panePolution",
//         stroke: false,
//         fillOpacity: 1,
//         fillPattern: pattern_polution_3_0,
//         interactive: true
//       };
//       break;
//     case "Ρύπανση από Φυτοφάρμακα":
//       return {
//         pane: "panePolution",
//         interactive: true
//       };
//       break;
//   }
// }
// function style_polution_2(feature) {
//   switch (String(feature.properties["category"])) {
//     case "ΔΙΑΦΟΡΑ":
//       return {
//         pane: "panePolution",
//         opacity: 1,
//         color: "rgba(228,26,28,1.0)",
//         dashArray: "",
//         lineCap: "square",
//         lineJoin: "bevel",
//         weight: 2.0,
//         fillOpacity: 0,
//         interactive: true
//       };
//       break;
//     case "Ρύπανση από Στερεά Απόβλητα":
//       return {
//         pane: "panePolution",
//         opacity: 1,
//         color: "rgba(255,31,241,1.0)",
//         dashArray: "",
//         lineCap: "square",
//         lineJoin: "bevel",
//         weight: 2.0,
//         fillOpacity: 0,
//         interactive: true
//       };
//       break;
//     case "Ρύπανση από Φυτοφάρμακα":
//       return {
//         pane: "panePolution",
//         opacity: 1,
//         color: "rgba(255,31,241,1.0)",
//         dashArray: "",
//         lineCap: "square",
//         lineJoin: "bevel",
//         weight: 2.0,
//         fillOpacity: 0,
//         interactive: true
//       };
//       break;
//   }
// }

// pattern_polution_3_0.addTo(map);

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
