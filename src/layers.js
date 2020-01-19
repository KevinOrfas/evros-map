var layerErosion = new L.geoJson(jsonErosion, {
  attribution: "",
  interactive: true,
  dataVar: "jsonErosion",
  layerName: "layerErosion",
  pane: "paneErosion",
  style: {
    pane: "paneErosion",
    opacity: 1,
    color: "rgba(56,128,54,1.0)",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1.0,
    fill: true,
    fillOpacity: 0.5,
    fillColor: "rgba(77,175,74,1.0)",
    interactive: true
  },
  onEachFeature: events_erosion_1
});

var layerOvergrazing = new L.geoJson(jsonOvergrazing, {
  attribution: "",
  interactive: true,
  dataVar: "jsonOvergrazing",
  layerName: "layerOvergrazing",
  pane: "paneOvergrazing",
  style: {
    pane: "paneOvergrazing",
    opacity: 1,
    color: "rgba(38,89,128,1.0)",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1.0,
    fill: true,
    fillOpacity: 0.5,
    fillColor: "rgba(55,126,184,1.0)",
    interactive: true
  },
  onEachFeature: eventsOvergrazing
});
