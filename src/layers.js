const layerErosion = new L.geoJson(jsonErosion, {
  attribution: "",
  interactive: true,
  dataVar: "jsonErosion",
  layerName: "layerErosion",
  pane: "paneErosion",
  style: {
    pane: "paneErosion",
    opacity: 1,
    color: "#adc378",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1,
    fill: true,
    fillOpacity: 0.5,
    fillColor: "#adc378",
    interactive: true
  },
  onEachFeature: eventsErosion
});

const layerOvergrazing = new L.geoJson(jsonOvergrazing, {
  attribution: "",
  interactive: true,
  dataVar: "jsonOvergrazing",
  layerName: "layerOvergrazing",
  pane: "paneOvergrazing",
  style: {
    pane: "paneOvergrazing",
    opacity: 1,
    color: "#9FC7E8",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1.0,
    fill: true,
    fillOpacity: 0.5,
    fillColor: "#9FC7E8",
    interactive: true
  },
  onEachFeature: eventsOvergrazing
});

const layerCement = new L.geoJson(jsonCement, {
  attribution: "",
  interactive: true,
  dataVar: "jsonCement",
  layerName: "layerCement",
  pane: "paneCement",
  style: {
    pane: "paneCement",
    opacity: 1,
    color: "#FBB23E",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1.0,
    fill: true,
    fillOpacity: 0.5,
    fillColor: "#FBB23E",
    interactive: true
  },
  onEachFeature: eventsCement
});

const layerPollution = new L.geoJson(jsonPollution, {
  attribution: "",
  interactive: true,
  dataVar: "jsonPollution",
  layerName: "layerPollution",
  pane: "panePollution",
  style: {
    pane: "panePollution",
    opacity: 1,
    color: "#f788b2",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1.0,
    fill: true,
    fillOpacity: 0.5,
    fillColor: "#f788b2",
    interactive: true
  },
  pointToLayer: featureToMarker,
  onEachFeature: eventsPollution
});

const qualityGood = jsonQuality.features.filter(byQuality("good"));
const qualityBad = jsonQuality.features.filter(byQuality("bad"));

const layerQuality = new L.geoJson(jsonQuality, {
  attribution: "",
  interactive: true,
  dataVar: "jsonQuality",
  layerName: "layerQuality",
  pointToLayer: featureToMarker
});

const layerDesertificationPoints = new L.geoJson(jsonDesertPoints, {
  attribution: "",
  interactive: true,
  dataVar: "jsonDesertPoints",
  layerName: "layerDesertificationPoints",
  pointToLayer: featureToMarker
});

// const layerPoisoningPoints = new L.geoJson(jsonPoisoning, {
//   attribution: "",
//   interactive: true,
//   dataVar: "jsonPoisoning",
//   layerName: "layerPoisoningPoints",
//   pointToLayer: featureToMarker
// });

const layerFirePoints = new L.geoJson(jsonFire, {
  attribution: "",
  interactive: true,
  dataVar: "jsonFire",
  layerName: "layerFirePoints",
  pointToLayer: featureToMarker
});

const layerFloodPoints = new L.geoJson(jsonFloodPoints, {
  attribution: "",
  interactive: true,
  dataVar: "jsonFloodPoints",
  layerName: "layerFloodPoints",
  pointToLayer: featureToMarker
});

const layerClimateEvents = new L.geoJson(json_climate_events_5, {
  attribution: "",
  interactive: true,
  dataVar: "json_climate_events_5",
  layerName: "layerClimateEvents",
  // pane: "paneErosion",
  style: {
    // pane: "paneErosion",
    opacity: 1,
    color: "#adc378",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1,
    fill: true,
    fillOpacity: 0.5,
    fillColor: "#adc378",
    interactive: true
  }
  // onEachFeature: eventsErosion
});

function style_survey_makri_7_0() {
  return {
    pane: "pane_survey_makri_7",
    radius: 9.6,
    opacity: 1,
    color: "rgba(35,35,35,1.0)",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1,
    fill: true,
    fillOpacity: 1,
    fillColor: "rgba(255,31,241,1.0)",
    interactive: true
  };
}

function pop_survey_makri_7(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature
  });
  var popupContent =
    '<table>\
              <tr>\
                  <td colspan="2">' +
    (feature.properties["Name"] !== null
      ? Autolinker.link(feature.properties["Name"].toLocaleString())
      : "") +
    '</td>\
              </tr>\
              <tr>\
                  <td colspan="2">' +
    (feature.properties["Images"] !== null
      ? Autolinker.link(feature.properties["Images"].toLocaleString())
      : "") +
    "</td>\
              </tr>\
          </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
}

const layerSurveyMakri = new L.geoJson(jsonSurveyMakri, {
  attribution: "",
  interactive: true,
  dataVar: "jsonSurveyMakri",
  layerName: "layerSurveyMakri",
  pane: "paneSurveyMakri",
  onEachFeature: pop_survey_makri_7,
  pointToLayer: function(feature, latlng) {
    var context = {
      feature: feature,
      variables: {}
    };
    return L.shapeMarker(latlng, style_survey_makri_7_0(feature));
  }
});
