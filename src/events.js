function events_erosion_1(feature, layer) {
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature
  });
  var erosionContent = `<div>
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
  layer.bindPopup(erosionContent, { maxHeight: 400 });
}
