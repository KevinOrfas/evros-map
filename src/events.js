function eventsErosion(feature, layer) {
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature
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

function eventsOvergrazing(feature, layer) {
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature
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

function eventsCement(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature
  });
  var popupContent =
    '<table>\
              <tr>\
                  <td colspan="2">' +
    (feature.properties["comment"] !== null
      ? Autolinker.link(feature.properties["comment"].toLocaleString())
      : "") +
    '</td>\
              </tr>\
              <tr>\
                  <td colspan="2">' +
    (feature.properties["village"] !== null
      ? Autolinker.link(feature.properties["village"].toLocaleString())
      : "") +
    "</td>\
              </tr>\
          </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
}

function popQuality(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature
  });
  var popupContent =
    '<table>\
              <tr>\
                  <td colspan="2">' +
    (feature.properties["poiotita"] !== null
      ? Autolinker.link(feature.properties["poiotita"].toLocaleString())
      : "") +
    '</td>\
              </tr>\
              <tr>\
                  <td colspan="2">' +
    (feature.properties["comment"] !== null
      ? Autolinker.link(feature.properties["comment"].toLocaleString())
      : "") +
    '</td>\
              </tr>\
              <tr>\
                  <td colspan="2">' +
    (feature.properties["village"] !== null
      ? Autolinker.link(feature.properties["village"].toLocaleString())
      : "") +
    "</td>\
              </tr>\
          </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_poiotita_6_0(feature) {
  switch (String(feature.properties["poiotita"])) {
    case "ΙΚΑΝΟΠΟΙΗΤΙΚΗ ΠΟΙΟΤΗΤΑ ΕΔΑΦΟΥΣ":
      return {
        pane: "pane_poiotita_6",
        radius: 7.2,
        opacity: 1,
        color: "rgba(128,17,25,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 2.0,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(219,30,42,1.0)",
        interactive: true
      };
      break;
    case "ΜΗ ΙΚΑΝΟΠΟΙΗΤΙΚΗ ΠΟΙΟΤΗΤΑ ΕΔΑΦΟΥΣ":
      return {
        pane: "pane_poiotita_6",
        radius: 7.2,
        opacity: 1,
        color: "rgba(61,128,53,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 2.0,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(84,176,74,1.0)",
        interactive: true
      };
      break;
  }
}
