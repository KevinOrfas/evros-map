/* eslint new-cap: ["error", { "newIsCap": false }] */
// import * as buildInformation from "../buildInformation.gen.js";
import './icons.css';
import './style.css';
import './libs/leaflet.css';
import './leaflet-panel-layers.css';

import {
  cementPointsData,
  desertificationData,
  erosionPointsData,
  fireData,
  floodData,
  overgrazingPointsData,
  pesticidesData,
  qualityData,
  wastesData,
} from '../data';

import { createMarker, byCategory } from './helpers';
import { conf, panelLayers } from './controls';
import { map } from './handlers';
import {
  cementLayer,
  climateLayer,
  erosionLayer,
  overgrazingLayer,
  pollutionLayer,
} from './layers';
import {
  IMG_20200111_094458,
  IMG_20200111_094832,
  IMG_20200111_095538,
  IMG_20200111_095817,
  IMG_20200111_100203,
  IMG_20200111_100327,
  IMG_20200111_100520,
  IMG_20200111_100733,
  IMG_20200111_100905,
  IMG_20200111_101350,
  IMG_20200111_101545,
  IMG_20200111_101730,
  IMG_20200111_101742,
  IMG_20200111_102213,
  IMG_20200111_102741,
  IMG_20200111_103100,
  IMG_20200111_104324,
  IMG_20200111_104415,
  IMG_20200111_104548,
  IMG_20200111_110123,
  IMG_20200117_100449,
  IMG_20200117_101005,
  IMG_20200117_101258,
  IMG_20200117_101726,
  IMG_20200315_101930,
  IMG_20200315_101936,
  IMG_20200315_102349,
  IMG_20200315_102928,
  IMG_20200315_103535,
} from './images';
const imagesMap = {
  IMG_20200111_094458,
  IMG_20200111_094832,
  IMG_20200111_095538,
  IMG_20200111_095817,
  IMG_20200111_100203,
  IMG_20200111_100327,
  IMG_20200111_100520,
  IMG_20200111_100733,
  IMG_20200111_100905,
  IMG_20200111_101350,
  IMG_20200111_101545,
  IMG_20200111_101730,
  IMG_20200111_101742,
  IMG_20200111_102213,
  IMG_20200111_102741,
  IMG_20200111_103100,
  IMG_20200111_104324,
  IMG_20200111_104415,
  IMG_20200111_104548,
  IMG_20200111_110123,
  IMG_20200117_100449,
  IMG_20200117_101005,
  IMG_20200117_101258,
  IMG_20200117_101726,
  IMG_20200315_101930,
  IMG_20200315_101936,
  IMG_20200315_102349,
  IMG_20200315_102928,
  IMG_20200315_103535,
};
// eslint-disable-next-line no-new
new L.Hash(map);
const scale = L.control.scale();
scale.addTo(map);

map.addControl(panelLayers);
const controls = L.control.panelLayers(conf.base.layers, null, {
  title: conf.base.title,
  compact: true,
  position: 'bottomright',
});
controls.addTo(map);

const paneNames = ['cement', 'climate', 'erosion', 'overgrazing', 'pollution'];
const createPaneMode = (mode, zIndex) => (name, index) => {
  map.createPane(name);
  const pane = map.getPane(name);
  pane.style.zIndex = zIndex + index;
  pane.style['mix-blend-mode'] = mode;
};
paneNames.forEach(createPaneMode('normal', 400));

// boundsGroup Starts
// Here we initialise the layers - related with panes
const boundsGroup = new L.featureGroup([]);
const featureGroupLayers = [
  cementLayer,
  climateLayer,
  erosionLayer,
  overgrazingLayer,
  pollutionLayer,
];
featureGroupLayers.forEach((layer) => {
  boundsGroup.addLayer(layer);
  map.addLayer(layer);
});
// boundsGroup end
const getMatchedWords = (strArr, regex) => {
  return strArr.map((str) => {
    let word;
    if (str) {
      str.replace(regex, (matchedWord) => {
        word = matchedWord;
      });
    }
    return word;
  });
};

const handlers = {
  wastes: (marker, name, village) => {
    marker.bindPopup(
      `<h3>Ρύπανση από απόβλητα</h3><img src="${imagesMap[name]}" width="900" height="600" />`
    );
  },
};

const constructIcons = (name, { features }) => {
  const markers = features.map(createMarker(name));
  // TODO: give it to web worker
  const images = features.map(({ properties }) => properties.Images);
  const regex = /img[_]?\d{8}[_]\d{6}/i;
  const names = getMatchedWords(images, regex);

  markers.forEach((marker, i) => {
    marker.addTo(map);
    const handler = handlers[name];
    if (handler) {
      handler(marker, names[i]);
    }
  });
};

const pointsData = {
  cement: cementPointsData,
  erosion: erosionPointsData,
  desertification: desertificationData,
  fire: fireData,
  flood: floodData,
  overgrazing: overgrazingPointsData,
  pesticides: pesticidesData,
  wastes: wastesData,
  'quality-good': {
    ...qualityData,
    features: qualityData.features.filter(byCategory('quality', 'good')),
  },
  'quality-bad': {
    ...qualityData,
    features: qualityData.features.filter(byCategory('quality', 'bad')),
  },
};

Object.entries(pointsData).forEach(([key, value]) => {
  constructIcons(key, value);
});
