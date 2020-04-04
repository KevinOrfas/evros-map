const panelLayersOptions = {
  title: conf.base.title,
  compact: true,

  // position: "bottomright"
};

const overLayers = [
  {
    name: "erosion",
    icon: iconByName("erosion"),
    layer: erosionLayer,
  },
  {
    name: "cement",
    icon: iconByName("cement"),
    layer: layerCement,
  },
  {
    name: "overgrazing",
    icon: iconByName("overgrazing"),
    layer: layerOvergrazing,
  },
  {
    name: "climate",
    icon: "",
    layer: layerClimate,
    subcategories: [
      {
        name: "flood",
        icon: "icon",
      },
      {
        name: "fire",
        icon: "icon",
      },
      {
        name: "desertification",
        icon: "icon",
      },
    ],
  },
  {
    name: "pollution",
    icon: "",
    layer: layerPollution,
    subcategories: [
      {
        name: "wastes",
        icon: "icon",
      },
      {
        name: "pesticides",
        icon: "icon",
      },
      {
        name: "poisoning",
        icon: "icon",
      },
    ],
  },
  {
    name: "quality",
    icon: "",
    layer: layerQuality,
    subcategories: [
      {
        name: "good",
        icon: "icon-quality",
      },
      {
        name: "bad",
        icon: "icon-quality",
      },
    ],
  },
];
var panelLayers = new L.Control.PanelLayers(null, overLayers);
map.addControl(panelLayers);
const base1 = L.control
  .panelLayers(conf.base.layers, null, panelLayersOptions)
  .addTo(map);

var scale = L.control.scale().addTo(map);
