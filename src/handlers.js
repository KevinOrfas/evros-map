import Autolinker from 'autolinker';
import { resetHighlight, highlightFeature, zoomToFeature } from './helpers';

const coords = [
  [40.06602200033871, 24.44890103711547],
  [41.75275316854418, 27.36050423859745],
];
const map = L.map('map', {
  zoomControl: true,
  maxZoom: 28,
  minZoom: 1,
}).fitBounds(coords);

const showDescription = (properties) => {
  const props = { ...properties, desc: 'Άλλο' };
  if (props.category === 'wastes') {
    props.desc = 'Ρύπανση από Στερεά Απόβλητα';
  } else if (props.category === 'pesticides') {
    props.desc = 'Ρύπανση από Φυτοφάρμακα';
  }
  return props.category !== null ? Autolinker.link(props.desc.toLocaleString()) : props.desc;
};

const getComments = ({ properties }) => {
  const { comment } = properties;
  return !comment ? '' : Autolinker.link(comment.toLocaleString());
};

const getVillage = ({ properties }) => {
  const { village } = properties;
  return !village ? '' : Autolinker.link(village.toLocaleString());
};

const getType = ({ properties }) => {
  const { eidos } = properties;
  return !eidos ? '' : Autolinker.link(eidos.toLocaleString());
};
const popupHeight = { maxHeight: 400 };

function eventHandlerComment(feature, layer) {
  const popupContent = `<div><h4>${getComments(feature)}</h4>${getVillage(feature)}</div>`;
  layer.bindPopup(popupContent, popupHeight);
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature(map),
  });
}

// function erosionHandler(feature, layer) {
//   const popupContent = `<div><h4>${getComments(feature)}</h4>${getVillage(feature)}</div>`;
//   layer.bindPopup(popupContent, popupHeight);
//   layer.on({
//     mouseout: resetHighlight,
//     mouseover: highlightFeature,
//     click: zoomToFeature(map),
//   });
// }

function eventHandlerType(feature, layer) {
  const popupContent = `<div><h4>${getType(feature)}</h4>${getVillage(feature)}</div>`;
  layer.bindPopup(popupContent, popupHeight);
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature(map),
  });
}

function eventHandlerDesc(feature, layer) {
  const popupContent = `<div><h4>${getComments(feature)}</h4>${getVillage(feature)}
	<br>${showDescription(feature.properties)}</div>`;
  layer.bindPopup(popupContent, popupHeight);
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature(map),
  });
}

// function qualityHandler(feature, layer) {
//   const popupContent = `<div><h4>${getComments(feature)}</h4>${getVillage(feature)}
// 	<br>${showDescription(feature.properties)}</div>`;
//   layer.bindPopup(popupContent, popupHeight);
//   layer.on({
//     mouseout: resetHighlight,
//     mouseover: highlightFeature,
//     click: zoomToFeature(map),
//   });
// }

export { map, eventHandlerDesc, eventHandlerType, eventHandlerComment };
