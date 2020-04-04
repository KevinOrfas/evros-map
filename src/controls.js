const conf = {
  base: {
    layers: [
      {
        group: {
          name: "Χάρτες",
        },

        collapsed: false,
        layers: [
          {
            name: "Google",
            layer: L.tileLayer(
              "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
              {
                opacity: 1.0,
                attribution:
                  '<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>',
                minZoom: 1,
                maxZoom: 28,
                minNativeZoom: 0,
                maxNativeZoom: 18,
              }
            ),
          },
          {
            name: "Topomaps",
            active: true,
            layer: {
              type: "tileLayer",
              args: ["https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"],
            },
          },
        ],
      },
    ],
  },
  overLayers: [
    {
      name: "erosion",
      icon: iconByName("erosion"),
      layer: erosionLayer,
    },
    {
      name: "cement",
      icon: iconByName("cement"),
      layer: cementLayer,
    },
    {
      name: "overgrazing",
      icon: iconByName("overgrazing"),
      layer: overgrazingLayer,
    },
    {
      name: "climate",
      icon: "",
      layer: climateLayer,
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
      layer: pollutionLayer,
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
      layer: qualityLayer,
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
  ],
};

const panelLayers = new L.Control.PanelLayers(null, conf.overLayers);
