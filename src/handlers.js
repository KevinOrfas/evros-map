import Autolinker from "autolinker";

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
  for (const i in e.target._eventParents) {
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
  // map.fitBounds(e.target.getBounds());
};

function cementHandler(feature, layer) {
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature,
  });
  const popupContent = `<div>
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
  const popupContent = `<div>
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
  const popupContent = `<div>
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
  const popupContent = `<div>
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

function qualityHandler(feature, layer) {
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature,
  });
  const popupContent = `<div>
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

export {
  cementHandler,
  erosionHandler,
  overgrazingHandler,
  pollutionHandler,
  qualityHandler,
};
