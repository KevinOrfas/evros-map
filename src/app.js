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
import {
  cementLayer,
  climateLayer,
  desertificationPointsLayer,
  erosionLayer,
  overgrazingLayer,
  pollutionLayer,
} from "./layers";
const map = L.map("map", {
  zoomControl: true,
  maxZoom: 28,
  minZoom: 1,
}).fitBounds([
  [40.06602200033871, 24.44890103711547],
  [41.75275316854418, 27.36050423859745],
]);

const hash = new L.Hash(map);

map.addControl(panelLayers);
L.control
  .panelLayers(conf.base.layers, null, {
    title: conf.base.title,
    compact: true,
    position: "bottomright",
  })
  .addTo(map);

const scale = L.control.scale().addTo(map);

// Pane creation starts
map.createPane("cement");
map.getPane("cement").style.zIndex = 403;
map.getPane("cement").style["mix-blend-mode"] = "normal";

map.createPane("climate");
map.getPane("climate").style.zIndex = 405;
map.getPane("climate").style["mix-blend-mode"] = "normal";

map.createPane("erosion");
map.getPane("erosion").style.zIndex = 400;
map.getPane("erosion").style["mix-blend-mode"] = "normal";

map.createPane("overgrazing");
map.getPane("overgrazing").style.zIndex = 401;
map.getPane("overgrazing").style["mix-blend-mode"] = "normal";

map.createPane("pollution");
map.getPane("pollution").style.zIndex = 404;
map.getPane("pollution").style["mix-blend-mode"] = "normal";
// Pane creation ends

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

const constructIcons = ({ features }, name) => {
  const markers = features.map(createMarker(name));
  const content = features.map(({ properties }) => properties.Images);
  const regex = /img[_]?\d{8}[_]\d{6}/i;
  console.log(content);
  markers.forEach((marker, i) => {
    marker.addTo(map);
    if (name === "wastes") {
      const names = content.map((e) => {
        let val;
        if (e) {
          e.replace(regex, (match) => {
            val = match;
          });
        }
        return val;
      });

      marker.bindPopup(
        `<img src="images/${names[i]}.jpg" width="300" height="225" />`
      );
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

console.log("ENV_IS_DEVELOPMENT", ENV_IS_DEVELOPMENT);
console.log("ENV_IS", ENV_IS);
