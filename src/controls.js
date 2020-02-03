const panelLayersOptions = {
  title: conf.base.title,
  compact: true
};

var base1 = L.control
  .panelLayers(conf.base.layers, null, panelLayersOptions)
  .addTo(map);

var overLayers = [
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
    name: "wastes",
    icon: iconByName("wastes"),
    layer: layerPolutionWastes
  },
  {
    name: "pesticides",
    icon: iconByName("pesticides"),
    layer: layerPolutionPesticides
  },
  {
    name: "polution",
    icon: iconByName("polution"),
    layer: layerPolutionMisc
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
  }
];
var panelLayers = new L.Control.PanelLayers(null, overLayers);
map.addControl(panelLayers);

// var over1 = L.control
//   .panelLayers(null, conf.tree.layers, panelLayersOptions)
//   .addTo(map);
var scale = L.control.scale().addTo(map);
