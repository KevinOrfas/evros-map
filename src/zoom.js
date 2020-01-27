map.on("zoomend", function() {
  var y = map.getSize().y,
    x = map.getSize().x;
  // calculate the distance the one side of the map to the other using the haversine formula
  var maxMeters = map
    .containerPointToLatLng([0, y])
    .distanceTo(map.containerPointToLatLng([x, y]));
  // calculate how many meters each pixel represents
  var MeterPerPixel = maxMeters / x;
  // say this is your scale
  // This is the scale denominator
  // console.log("scale denominator: ", MeterPerPixel * scale.options.maxWidth);
  // console.log("zoom", map.getZoom());
});

const markUpFn = (color, name) =>
  `<i style="background: ${color}"></i><span>${name}</span><br>`;

const legend = L.control({ position: "bottomleft" });

legend.onAdd = () => {
  let div = L.DomUtil.create("div", "legend");
  div.innerHTML += markUpFn("#adc378", "Erosion");
  div.innerHTML += markUpFn("#9FC7E8", "Overgrazing");
  div.innerHTML += markUpFn("#FBB23E", "Cement");
  div.innerHTML += markUpFn("#f788b2", "Polution");
  return div;
};

legend.addTo(map);
