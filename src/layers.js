var layerErosion = new L.geoJson(jsonErosion, {
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
  // pointToLayer: featureToMarker,
  onEachFeature: eventsErosion
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
  pointToLayer: featureToMarker,
  onEachFeature: eventsOvergrazing
});

var layerCement = new L.geoJson(jsonCement, {
  attribution: "",
  interactive: true,
  dataVar: "jsonCement",
  layerName: "layerCement",
  pane: "paneCement",
  style: {
    pane: "paneCement",
    opacity: 0.5,
    color: "#FBB23E",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1.0,
    fill: true,
    fillOpacity: 0.1,
    fillColor: "#FBB23E",
    interactive: true
  },
  pointToLayer: featureToMarker,
  onEachFeature: eventsCement
});

const filterFeatures = filter => feature =>
  feature.properties.category === filter;

const polutionWastes = jsonPolution.features.filter(
  filterFeatures("Ρύπανση από Στερεά Απόβλητα")
);
const polutionPesticides = jsonPolution.features.filter(
  filterFeatures("Ρύπανση από Φυτοφάρμακα")
);
const polutionMisc = jsonPolution.features.filter(filterFeatures("ΔΙΑΦΟΡΑ"));

const jsonPolutionWastes = { ...jsonPolution };
jsonPolutionWastes.features = polutionWastes;
jsonPolutionWastes.name = "polutionWastes";

var layerPolutionWastes = new L.geoJson(jsonPolutionWastes, {
  attribution: "",
  interactive: true,
  dataVar: "jsonPolutionWastes",
  layerName: "layerPolutionWastes",
  pane: "panePolutionWastes",
  style: {
    pane: "panePolutionWastes",
    opacity: 0.5,
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
  onEachFeature: eventsPolution
});

const jsonPolutionPesticides = { ...jsonPolution };
jsonPolutionPesticides.features = polutionPesticides;
jsonPolutionPesticides.name = "polutionPesticides";
var layerPolutionPesticides = new L.geoJson(jsonPolutionPesticides, {
  attribution: "",
  interactive: true,
  dataVar: "jsonPolutionPesticides",
  layerName: "layerPolutionPesticides",
  pane: "panePolutionPesticides",
  style: {
    pane: "panePolutionPesticides",
    opacity: 0.5,
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
  onEachFeature: eventsPolution
});

const jsonPolutionMisc = { ...jsonPolution };
jsonPolutionMisc.features = polutionMisc;
jsonPolutionMisc.name = "polutionMisc";

var layerPolutionMisc = new L.geoJson(jsonPolutionMisc, {
  attribution: "",
  interactive: true,
  dataVar: "jsonPolutionMisc",
  layerName: "layerPolutionMisc",
  pane: "panePolutionMisc",
  style: {
    pane: "panePolutionMisc",
    opacity: 0.5,
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
  onEachFeature: eventsPolution
});

var layerDesertificationPoints = new L.geoJson(jsonDesertificationPoints, {
  attribution: "",
  interactive: true,
  dataVar: "jsonDesertificationPoints",
  layerName: "layerDesertificationPoints",
  pane: "paneDesertification",
  pointToLayer: featureToMarker
});

var layerOvergrazingPoints = new L.geoJson(jsonOvergrazingPoints, {
  attribution: "",
  interactive: true,
  dataVar: "jsonOvergrazingPoints",
  layerName: "layerOvergrazingPoints",
  pane: "paneFireOvergrazingPoints",
  pointToLayer: featureToMarker
});

var layerFirePoints = new L.geoJson(jsonFirePoints, {
  attribution: "",
  interactive: true,
  dataVar: "jsonFirePoints",
  layerName: "layerFirePoints",
  pane: "paneFirePoints",
  pointToLayer: featureToMarker
});

var layerFloodPoints = new L.geoJson(jsonFloodPoints, {
  attribution: "",
  interactive: true,
  dataVar: "jsonFloodPoints",
  layerName: "layerFloodPoints",
  pane: "paneFloodPoints",
  pointToLayer: featureToMarker
});

var layerQuality = new L.geoJson(jsonQuality, {
  attribution: "",
  interactive: true,
  dataVar: "jsonQuality",
  layerName: "layerQuality",
  pane: "paneQuality",
  onEachFeature: popQuality,
  pointToLayer: function(feature, latlng) {
    var context = {
      feature: feature,
      variables: {}
    };
    return L.circleMarker(latlng, style_poiotita_6_0(feature));
  }
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

var layerSurveyMakri = new L.geoJson(jsonSurveyMakri, {
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

// function pop_polution_3(feature, layer) {
//   layer.on({
//     mouseout: function(e) {
//       for (i in e.target._eventParents) {
//         e.target._eventParents[i].resetStyle(e.target);
//       }
//     },
//     mouseover: highlightFeature
//   });
//   var popupContent =
//     '<table>\
//               <tr>\
//                   <td colspan="2">' +
//     (feature.properties["comment"] !== null
//       ? Autolinker.link(feature.properties["comment"].toLocaleString())
//       : "") +
//     '</td>\
//               </tr>\
//               <tr>\
//                   <td colspan="2">' +
//     (feature.properties["village"] !== null
//       ? Autolinker.link(feature.properties["village"].toLocaleString())
//       : "") +
//     '</td>\
//               </tr>\
//               <tr>\
//                   <td colspan="2">' +
//     (feature.properties["category"] !== null
//       ? Autolinker.link(feature.properties["category"].toLocaleString())
//       : "") +
//     "</td>\
//               </tr>\
//           </table>";
//   layer.bindPopup(popupContent, { maxHeight: 400 });
// }
