const panelLayersOptions = {
  title: conf.base.title,
  // position: "topright",
  compact: true
};

var base1 = L.control
  .panelLayers(conf.base.layers, null, panelLayersOptions)
  .addTo(map);

var over1 = L.control
  .panelLayers(null, conf.tree.layers, panelLayersOptions)
  .addTo(map);

var overLayers = [
  {
    name: "Erosion",
    icon: iconByName("erosion"),
    layer: L.geoJson(jsonErosion, {
      pointToLayer: featureToMarker
    })
  },
  {
    name: "overgrazing",
    icon: iconByName("overgrazing"),
    layer: L.geoJson(jsonOvergrazing, {
      pointToLayer: featureToMarker
    })
  }
];
var panelLayers = new L.Control.PanelLayers(null, overLayers);
map.addControl(panelLayers);

var scale = L.control.scale().addTo(map);
