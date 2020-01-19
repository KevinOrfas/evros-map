function events_erosion_1(feature, layer) {
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

function events_iperboskisi_2(feature, layer) {
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
