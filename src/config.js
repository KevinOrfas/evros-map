var conf = {
  base: {
    title: "Maps",
    layers: [
      {
        group: "Road Layers",
        collapsed: true,
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
                maxNativeZoom: 18
              }
            )
          },
          {
            name: "Topomaps",
            active: true,
            layer: {
              type: "tileLayer",
              args: ["https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"]
            }
          }
        ]
      }
    ]
  },
  tree: {
    title: "Tree Cover Trend",
    layers: [
      {
        active: false,
        name: "Gain",
        layer: {
          type: "tileLayer",
          args: [
            "http://earthengine.google.org/static/hansen_2013/gain_alpha/{z}/{x}/{y}.png",
            {
              maxZoom: 12,
              attribution:
                '<a href="http://earthenginepartners.appspot.com/science-2013-global-forest"> ' +
                "Tree Cover Gain (12 years, 30m, global)</a>"
            }
          ]
        }
      },
      {
        name: "Loss",
        layer: {
          type: "tileLayer",
          args: [
            "http://earthengine.google.org/static/hansen_2013/loss_alpha/{z}/{x}/{y}.png",
            {
              maxZoom: 12,
              attribution:
                '<a href="http://earthenginepartners.appspot.com/science-2013-global-forest"> ' +
                "Tree Cover Loss (12 years, 30m, global)</a>"
            }
          ]
        }
      }
    ]
  }
};
