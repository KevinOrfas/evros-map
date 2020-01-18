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
