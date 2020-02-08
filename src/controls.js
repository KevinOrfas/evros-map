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
  // {
  //   name: "pesticides",
  //   icon: iconByName("pesticides"),
  //   layer: layerPolutionPesticides
  // },
  // {
  //   name: "polution",
  //   icon: iconByName("polution"),
  //   layer: layerPolutionMisc
  // },
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
    name: "quality-good",
    icon: iconByName("quality-good"),
    layer: layerQualityGood
  },
  {
    name: "quality-bad",
    icon: iconByName("quality-bad"),
    layer: layerQualityBad
  }
];
var panelLayers = new L.Control.PanelLayers(null, overLayers);
map.addControl(panelLayers);

var scale = L.control.scale().addTo(map);
