function highlightFeature(e) {
  var layer = e.target;
  // console.log({ f: e.target.feature });
  if (e.target.feature.geometry.type === "LineString") {
    layer.setStyle({
      color: "blue"
    });
  } else {
    layer.setStyle({
      fillColor: "green",
      fillOpacity: 1
    });
  }
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
  info.update(layer.feature.properties);
}

function resetHighlight(e) {
  for (i in e.target._eventParents) {
    e.target._eventParents[i].resetStyle(e.target);
  }
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

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
    fillColor: getColor("#FFEDA0"),
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
  return L.marker([40.06602200033871, 24.44890103711547]);

  // return L.marker(latlng, {
  //   icon: L.divIcon({
  //     className: "marker-" + "erosion",
  //     html: iconByName("erosion"),
  //     iconUrl: "../icons/" + "erosion" + ".png",
  //     iconSize: [25, 41],
  //     iconAnchor: [12, 41],
  //     popupAnchor: [1, -34],
  //     shadowSize: [41, 41]
  //   })
  // });
}
