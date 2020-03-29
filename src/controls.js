const panelLayersOptions = {
  title: conf.base.title,
  compact: true

  // position: "bottomright"
};

const overLayers = [
  {
    name: "erosion",
    icon: iconByName("erosion"),
    layer: layerErosion
  },
  {
    name: "cement",
    icon: iconByName("cement"),
    layer: layerCement
  },
  {
    name: "overgrazing",
    icon: iconByName("overgrazing"),
    layer: layerOvergrazing
  },
  {
    name: "desertification",
    icon: iconByName("desertification"),
    layer: layerDesertificationPoints
  },
  {
    name: "fire",
    icon: iconByName("fire"),
    layer: layerFirePoints
  },
  {
    name: "flood",
    icon: iconByName("flood"),
    layer: layerFloodPoints
  },

  {
    name: "pollution",
    icon: "",
    layer: layerPollution
  },
  {
    name: "quality",
    icon: "",
    layer: layerQuality
  }
];
var panelLayers = new L.Control.PanelLayers(null, overLayers);
map.addControl(panelLayers);
const base1 = L.control
  .panelLayers(conf.base.layers, null, panelLayersOptions)
  .addTo(map);

var scale = L.control.scale().addTo(map);
