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
} from "../data";

import { createMarker, featureIcon, byCategory } from "./helpers";
import { conf, panelLayers } from "./controls";
import { map } from "./handlers";
import {
  cementLayer,
  climateLayer,
  desertificationPointsLayer,
  erosionLayer,
  overgrazingLayer,
  pollutionLayer,
} from "./layers";

const hash = new L.Hash(map);
const scale = L.control.scale().addTo(map);

map.addControl(panelLayers);
const controls = L.control.panelLayers(conf.base.layers, null, {
  title: conf.base.title,
  compact: true,
  position: "bottomright",
});
controls.addTo(map);

const paneNames = ["cement", "climate", "erosion", "overgrazing", "pollution"];
const createPane = (mode, zIndex) => (name, index) => {
  map.createPane(name);
  const pane = map.getPane(name);
  pane.style.zIndex = zIndex + index;
  pane.style["mix-blend-mode"] = mode;
};
paneNames.forEach(createPane("normal", 400));

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
    marker.bindPopup(
      `<img src="images/${name}.jpg" width="300" height="225" />`
    );
  },
};

const constructIcons = ({ features }, name) => {
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

const badQPoints = qualityData.features.filter(byCategory("quality", "bad"));
const goodQPoints = qualityData.features.filter(byCategory("quality", "good"));

constructIcons(cementPointsData, "cement");
constructIcons(erosionPointsData, "erosion");
constructIcons(desertificationData, "desertification");
constructIcons(fireData, "fire");
constructIcons(floodData, "flood");
constructIcons(overgrazingPointsData, "overgrazing");
constructIcons(pesticidesData, "pesticides");
constructIcons(wastesData, "wastes");
constructIcons({ ...qualityData, features: goodQPoints }, "quality-good");
constructIcons({ ...qualityData, features: badQPoints }, "quality-bad");
