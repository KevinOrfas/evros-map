/* eslint new-cap: ["error", { "newIsCap": false }] */

import {
  cementData,
  climateData,
  erosionData,
  overgrazingData,
  pollutionData,
  qualityData,
} from '../data';
import { eventHandler, commentCnt, descCnt, typeCnt } from './handlers';

import { featureToMarker } from './helpers';

const setLayerOptions = (name, color, handler) => {
  return {
    attribution: '',
    interactive: true,
    dataVar: `${name}Data`,
    layerName: `${name}Layer`,
    pane: `${name}`,
    style: {
      pane: `${name}`,
      opacity: 1,
      color: color,
      // radius: 7.2,
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1,
      fill: true,
      fillOpacity: 0.5,
      fillColor: color,
      interactive: true,
    },
    onEachFeature: handler,
  };
};

const cementLayer = new L.geoJson(
  cementData,
  setLayerOptions('cement', 'rgb(251,176,64)', eventHandler(commentCnt))
);
const climateLayer = new L.geoJson(
  climateData,
  setLayerOptions('climate', 'rgb(255,233,107)', eventHandler(commentCnt))
);
const erosionLayer = new L.geoJson(
  erosionData,
  setLayerOptions('erosion', 'rgb(198,222,137)', eventHandler(commentCnt))
);
const overgrazingLayer = new L.geoJson(
  overgrazingData,
  setLayerOptions('overgrazing', 'rgb(160,201,236)', eventHandler(typeCnt))
);
const pollutionLayer = new L.geoJson(
  pollutionData,
  setLayerOptions('pollution', 'rgb(245,152,170)', eventHandler(descCnt))
);

const qualityLayer = new L.geoJson(qualityData, {
  ...setLayerOptions('quality', 'rgb(255,255,255)', eventHandler(descCnt)),
  pointToLayer: featureToMarker,
});

export { cementLayer, climateLayer, erosionLayer, overgrazingLayer, pollutionLayer, qualityLayer };
