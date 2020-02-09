const panelLayersOptions = {
  title: conf.base.title,
  compact: true
};

const base1 = L.control
  .panelLayers(conf.base.layers, null, panelLayersOptions)
  .addTo(map);

const overLayers = [
  {
    name: "erosion",
    icon: iconByName("erosion"),
    layer: layerErosion
  },
  {
    name: "overgrazing",
    icon: iconByName("overgrazing"),
    layer: layerOvergrazing
  },
  {
    name: "cement",
    icon: iconByName("cement"),
    layer: layerCement
  },
  {
    name: "pollution",
    icon: iconByName("pollution"),
    layer: layerPollution
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
    name: "quality",
    icon: "",
    layer: layerQuality
  }
];
var panelLayers = new L.Control.PanelLayers(null, overLayers);
map.addControl(panelLayers);

var scale = L.control.scale().addTo(map);
