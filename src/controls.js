const panelLayersOptions = {
  title: conf.base.title,
  compact: true
};

var base1 = L.control
  .panelLayers(conf.base.layers, null, panelLayersOptions)
  .addTo(map);

var overLayers = [
  {
    name: "Erosion",
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
    name: "polution-wastes",
    icon: iconByName("polution-wastes"),
    layer: layerPolutionWastes
  },
  {
    name: "polution-pesticides",
    icon: iconByName("polution-pesticides"),
    layer: layerPolutionPesticides
  },
  {
    name: "desertification",
    icon: iconByName("desertification"),
    layer: layerDesertification
  },
  {
    name: "fire",
    icon: iconByName("fire"),
    layer: layerFirePoints
  },

  {
    name: "polution-misc",
    icon: iconByName("polution-misc"),
    layer: L.geoJson(jsonPolutionMisc, {
      pointToLayer: featureToMarker,
      color: "black",
      fillColor: "black"
    })
  }
];
var panelLayers = new L.Control.PanelLayers(null, overLayers);
map.addControl(panelLayers);

var over1 = L.control
  .panelLayers(null, conf.tree.layers, panelLayersOptions)
  .addTo(map);
var scale = L.control.scale().addTo(map);
