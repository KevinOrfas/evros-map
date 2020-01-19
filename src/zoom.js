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
  console.log("scale denominator: ", MeterPerPixel * scale.options.maxWidth);

  console.log("zoom", map.getZoom());
});

var legend = L.control({ position: "bottomright" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "info legend"),
    grades = [0, 10, 20, 50, 100, 200, 500, 1000],
    labels = [];

  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' +
      getColor(grades[i] + 1) +
      '"></i> ' +
      grades[i] +
      (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
  }

  return div;
};

legend.addTo(map);
