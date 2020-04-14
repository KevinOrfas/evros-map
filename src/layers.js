/* eslint new-cap: ["error", { "newIsCap": false }] */

import {
  cementData,
  climateData,
  erosionData,
  overgrazingData,
  pollutionData,
  qualityData,
} from '../data';
import { eventHandlerDesc, eventHandlerType, eventHandlerComment } from './handlers';

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
  setLayerOptions('cement', '#FBB23E', eventHandlerComment)
);
const climateLayer = new L.geoJson(climateData, setLayerOptions('climate', 'yellow'));
const erosionLayer = new L.geoJson(
  erosionData,
  setLayerOptions('erosion', '#adc378', eventHandlerComment)
);
const overgrazingLayer = new L.geoJson(
  overgrazingData,
  setLayerOptions('overgrazing', '#9FC7E8', eventHandlerType)
);

const pollutionLayer = new L.geoJson(
  pollutionData,
  setLayerOptions('pollution', '#f788b2', eventHandlerDesc)
);

const qualityLayer = new L.geoJson(qualityData, {
  ...setLayerOptions('quality', '#ff11ee', eventHandlerDesc),
  pointToLayer: featureToMarker,
});

export { cementLayer, climateLayer, erosionLayer, overgrazingLayer, pollutionLayer, qualityLayer };
