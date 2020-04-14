/* eslint new-cap: ["error", { "newIsCap": false }] */
// import * as buildInformation from "../buildInformation.gen.js";
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
const createPane = (mode, zIndex) => (name, index) => {
  map.createPane(name);
  const pane = map.getPane(name);
  pane.style.zIndex = zIndex + index;
  pane.style['mix-blend-mode'] = mode;
};
paneNames.forEach(createPane('normal', 400));

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
  wastes: (marker, name) => {
    marker.bindPopup(`<img src="images/${name}.jpg" width="300" height="225" />`);
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
