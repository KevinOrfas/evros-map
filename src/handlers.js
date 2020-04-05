const showDescription = (properties) => {
  const props = { ...properties, desc: "Άλλο" };
  if (props.category === "wastes") {
    props.desc = "Ρύπανση από Στερεά Απόβλητα";
  } else if (props.category === "pesticides") {
    props.desc = "Ρύπανση από Φυτοφάρμακα";
  }
  return props.category !== null
    ? Autolinker.link(props.desc.toLocaleString())
    : props.desc;
};

const resetHighlight = (e) => {
  for (i in e.target._eventParents) {
    e.target._eventParents[i].resetStyle(e.target);
  }
  // info.update();
};

const highlightFeature = (e) => {
  const layer = e.target;

  if (e.target.feature.geometry.type === "LineString") {
    layer.setStyle({
      color: "blue",
    });
  } else {
    layer.setStyle({
      fillColor: layer.defaultOptions.style.color,
      fillOpacity: 1,
    });
  }
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
  // info.update(layer.feature.properties);
};

const zoomToFeature = (e) => {
  map.fitBounds(e.target.getBounds());
};

function cementHandler(feature, layer) {
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature,
  });
  var popupContent = `<div>
  <h4>${
    feature.properties["comment"] !== null
      ? Autolinker.link(feature.properties["comment"].toLocaleString())
      : ""
  }</h4>
  ${
    feature.properties["village"] !== null
      ? Autolinker.link(feature.properties["village"].toLocaleString())
      : ""
  }</div>`;

  layer.bindPopup(popupContent, { maxHeight: 400 });
}

function erosionHandler(feature, layer) {
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature,
  });
  var popupContent = `<div>
    <h4>${
      feature.properties["village"] !== null
        ? Autolinker.link(feature.properties["village"].toLocaleString())
        : ""
    }</h4>
    ${
      feature.properties["comment"] !== null
        ? Autolinker.link(feature.properties["comment"].toLocaleString())
        : ""
    }</div>`;
  layer.bindPopup(popupContent, { maxHeight: 400 });
}

function overgrazingHandler(feature, layer) {
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature,
  });
  var popupContent = `<div>
  <h4>${
    feature.properties["eidos"] !== null
      ? Autolinker.link(feature.properties["eidos"].toLocaleString())
      : ""
  }</h4>
  ${
    feature.properties["village"] !== null
      ? Autolinker.link(feature.properties["village"].toLocaleString())
      : ""
  }</div>`;

  layer.bindPopup(popupContent, { maxHeight: 400 });
}

function pollutionHandler(feature, layer) {
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature,
  });
  var popupContent = `<div>
  <h4>${
    feature.properties["comment"] !== null
      ? Autolinker.link(feature.properties["comment"].toLocaleString())
      : ""
  }</h4>
  ${
    feature.properties["village"] !== null
      ? Autolinker.link(feature.properties["village"].toLocaleString())
      : ""
  }<br>
  ${showDescription(feature.properties)}
  </div>`;

  layer.bindPopup(popupContent, { maxHeight: 400 });
}

export { cementHandler, erosionHandler, overgrazingHandler, pollutionHandler };

// function popQuality(feature, layer) {
//   layer.on({
//     mouseout: function (e) {
//       for (i in e.target._eventParents) {
//         e.target._eventParents[i].resetStyle(e.target);
//       }
//     },
//     mouseover: highlightFeature,
//   });
//   var popupContent =
//     '<table>\
//               <tr>\
//                   <td colspan="2">' +
//     (feature.properties["quality"] !== null
//       ? Autolinker.link(feature.properties["quality"].toLocaleString())
//       : "") +
//     '</td>\
//               </tr>\
//               <tr>\
//                   <td colspan="2">' +
//     (feature.properties["comment"] !== null
//       ? Autolinker.link(feature.properties["comment"].toLocaleString())
//       : "") +
//     '</td>\
//               </tr>\
//               <tr>\
//                   <td colspan="2">' +
//     (feature.properties["village"] !== null
//       ? Autolinker.link(feature.properties["village"].toLocaleString())
//       : "") +
//     "</td>\
//               </tr>\
//           </table>";
//   layer.bindPopup(popupContent, { maxHeight: 400 });
// }

// function style_poiotita_6_0(feature) {
//   switch (String(feature.properties["quality"])) {
//     case "good":
//       return {
//         pane: "paneQuality",
//         radius: 7.2,
//         opacity: 1,
//         color: "rgba(128,17,25,1.0)",
//         dashArray: "",
//         lineCap: "butt",
//         lineJoin: "miter",
//         weight: 2.0,
//         fill: true,
//         fillOpacity: 1,
//         fillColor: "rgba(219,30,42,1.0)",
//         interactive: true,
//       };
//       break;
//     case "bad":
//       return {
//         pane: "paneQuality",
//         radius: 7.2,
//         opacity: 1,
//         color: "rgba(61,128,53,1.0)",
//         dashArray: "",
//         lineCap: "butt",
//         lineJoin: "miter",
//         weight: 2.0,
//         fill: true,
//         fillOpacity: 1,
//         fillColor: "rgba(84,176,74,1.0)",
//         interactive: true,
//       };
//       break;
//   }
// }
