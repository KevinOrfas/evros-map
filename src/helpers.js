function highlightFeature(e) {
  var layer = e.target;
  console.log({ layer });
  if (e.target.feature.geometry.type === "LineString") {
    layer.setStyle({
      color: "#ffff00"
    });
  } else {
    layer.setStyle({
      fillColor: "#ffff00",
      fillOpacity: 1
    });
  }
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
}

function resetHighlight(e) {
  for (i in e.target._eventParents) {
    e.target._eventParents[i].resetStyle(e.target);
  }
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}
