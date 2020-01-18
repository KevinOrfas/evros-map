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
            active: true,
            layer: L.tileLayer(
              "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
              {
                opacity: 1.0,
                attribution: "",
                minZoom: 1,
                maxZoom: 28,
                minNativeZoom: 0,
                maxNativeZoom: 18
              }
            )
          },
          {
            name: "Corine",
            layer: {
              type: "tileLayer",
              args: [
                "http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png"
              ]
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
