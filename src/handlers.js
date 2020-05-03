import Autolinker from 'autolinker';
import { resetHighlight, highlightFeature, zoomToFeature, capitalize } from './helpers';

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
  return !desc ? desc : Autolinker.link(capitalize(desc.toLocaleString()));
};

const linker = (name, properties) => {
  const property = properties[name];
  return !property ? '' : Autolinker.link(capitalize(property.toLocaleString().toLowerCase()));
};

const uiCopyTypes = ['comment', 'village', 'eidos', 'category'];
const [getComments, getVillage, getType, getCategory] = uiCopyTypes.map(
  (text) => ({ properties }) => {
    return linker(text, properties);
  }
);
const commentCnt = (feature) => {
  return `<div class="wrapper"><h4 class="inline-head">${getVillage(feature)}</h4>, ${getCategory(
    feature
  )}<hr>${getComments(feature)}</div>`;
};

const typeCnt = (feature) =>
  `<div class="wrapper"><h4 class="inline-head">${getVillage(feature)}</h4>, ${getType(
    feature
  )}<hr></div>`;
const descCnt = (feature) =>
  `<div class="wrapper"><h4 class="inline-head">${getVillage(feature)}</h4>, ${showDescription(
    feature.properties
  )}<hr>${getComments(feature)}</div>`;

const eventHandler = (content) => (feature, layer) => {
  layer.bindPopup(content(feature), { maxHeight: 400 });
  layer.on({
    mouseout: resetHighlight,
    mouseover: highlightFeature,
    click: zoomToFeature(map),
  });
};

export { map, eventHandler, descCnt, typeCnt, commentCnt };
