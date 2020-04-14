import Autolinker from "autolinker";
import { resetHighlight, highlightFeature, zoomToFeature } from "./helpers";

const coords = [
  [40.06602200033871, 24.44890103711547],
  [41.75275316854418, 27.36050423859745],
];
const map = L.map("map", {
  zoomControl: true,
  maxZoom: 28,
  minZoom: 1,
}).fitBounds(coords);

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

function cementHandler(feature, layer) {
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature(map),
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
    click: zoomToFeature(map),
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
    click: zoomToFeature(map),
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
    click: zoomToFeature(map),
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
    click: zoomToFeature(map),
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
  map,
};
