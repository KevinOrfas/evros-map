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
    layer: L.geoJson(jsonErosion, {
      pointToLayer: featureToMarker,
      color: "#adc378",
      fillColor: "#adc378"
    })
  },
  {
    name: "overgrazing",
    icon: iconByName("overgrazing"),
    layer: L.geoJson(jsonOvergrazing, {
      pointToLayer: featureToMarker,
      color: "#9FC7E8",
      fillColor: "#9FC7E8"
    })
  },
  {
    name: "cement",
    icon: iconByName("cement"),
    layer: L.geoJson(jsonCement, {
      pointToLayer: featureToMarker,
      color: "#FBB23E",
      fillColor: "#FBB23E"
    })
  },
  {
    name: "polution-wastes",
    icon: iconByName("polution-wastes"),
    layer: L.geoJson(jsonPolutionWastes, {
      pointToLayer: featureToMarker,
      color: "#f788b2",
      fillColor: "#f788b2"
    })
  },
  {
    name: "polution-pesticides",
    icon: iconByName("polution-pesticides"),
    layer: L.geoJson(jsonPolutionPesticides, {
      pointToLayer: featureToMarker,
      color: "#f788d5",
      fillColor: "#f788d5"
    })
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
