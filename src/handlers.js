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

const getPollutionDesc = (category) => {
  const handler = {
    wastes: 'Ρύπανση από Στερεά Απόβλητα',
    pesticides: 'Ρύπανση από Φυτοφάρμακα',
    default: '',
  };
  return handler[category] || handler.default;
};

const showDescription = ({ category }) => {
  const desc = getPollutionDesc(category);
  return !desc ? desc : Autolinker.link(desc.toLocaleString());
};

const linker = (name, props) => {
  const property = props[name];
  return !property ? '' : Autolinker.link(property.toLocaleString());
};

const uiCopyTypes = ['comment', 'village', 'eidos'];
const [getComments, getVillage, getType] = uiCopyTypes.map((text) => ({ properties }) => {
  return linker(text, properties);
});

const commentCnt = (feature) =>
  `<div><h4>Τοποθεσία: ${getVillage(feature)}</h4><hr>${getComments(feature)}</div>`;
const typeCnt = (feature) => `<div><h4>${getType(feature)}</h4><hr>${getVillage(feature)}</div>`;
const descCnt = (feature) =>
  `<div><h4>${getVillage(feature)}</h4><hr><p>${showDescription(
    feature.properties
  )}</br>${getComments(feature)}</p></div>`;

const eventHandler = (content) => (feature, layer) => {
  layer.bindPopup(content(feature), { maxHeight: 400 });
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature(map),
  });
};

export { map, eventHandler, descCnt, typeCnt, commentCnt };
