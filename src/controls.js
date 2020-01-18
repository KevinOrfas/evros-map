const panelLayersOptions = {
  title: conf.base.title,
  position: "topright",
  compact: true
};

var base1 = L.control
  .panelLayers(conf.base.layers, null, panelLayersOptions)
  .addTo(map);

var over1 = L.control
  .panelLayers(null, conf.tree.layers, panelLayersOptions)
  .addTo(map);

var scale = L.control.scale().addTo(map);
