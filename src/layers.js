import { cementData } from "../data/index";

const setLayerOtpions = (name, color, handler) => {
  return {
    attribution: "",
    interactive: true,
    dataVar: `${name}Data`,
    layerName: `${name}Layer`,
    pane: "erosion",
    style: {
      pane: "erosion",
      opacity: 1,
      color: color,
      dashArray: "",
      lineCap: "butt",
      lineJoin: "miter",
      weight: 1,
      fill: true,
      fillOpacity: 0.5,
      fillColor: color,
      interactive: true,
    },
    onEachFeature: handler,
  };
};

const erosionLayer = new L.geoJson(
  erosionData,
  setLayerOtpions("erosion", "#adc378", erosionHandler)
);
const overgrazingLayer = new L.geoJson(
  overgrazingData,
  setLayerOtpions("overgrazing", "#9FC7E8", overgrazingHandler)
);
const cementLayer = new L.geoJson(
  cementData,
  setLayerOtpions("cement", "#FBB23E", cementHandler)
);
const pollutionLayer = new L.geoJson(
  pollutionData,
  setLayerOtpions("pollution", "#f788b2", pollutionHandler)
);
const climateLayer = new L.geoJson(
  climateData,
  setLayerOtpions("climate", "yellow")
);

const qualityLayer = new L.geoJson(qualityData, {
  attribution: "",
  interactive: true,
  dataVar: "jsonQuality",
  layerName: "layerQuality",
  pane: "quality",
  pointToLayer: featureToMarker,
});

const layerDesertificationPoints = new L.geoJson(jsonDesertPoints, {
  attribution: "",
  interactive: true,
  dataVar: "jsonDesertPoints",
  layerName: "layerDesertificationPoints",
  pointToLayer: featureToMarker,
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
  pointToLayer: featureToMarker,
});

const layerFloodPoints = new L.geoJson(jsonFloodPoints, {
  attribution: "",
  interactive: true,
  dataVar: "jsonFloodPoints",
  layerName: "layerFloodPoints",
  pointToLayer: featureToMarker,
});

export {
  layerFloodPoints,
  layerFirePoints,
  layerDesertificationPoints,
  qualityLayer,
  climateLayer,
  pollutionLayer,
  cementLayer,
  overgrazingLayer,
  erosionLayer,
};

// function style_survey_makri_7_0() {
//   return {
//     pane: "pane_survey_makri_7",
//     radius: 9.6,
//     opacity: 1,
//     color: "rgba(35,35,35,1.0)",
//     dashArray: "",
//     lineCap: "butt",
//     lineJoin: "miter",
//     weight: 1,
//     fill: true,
//     fillOpacity: 1,
//     fillColor: "rgba(255,31,241,1.0)",
//     interactive: true,
//   };
// }

// function pop_survey_makri_7(feature, layer) {
//   layer.on({
//     mouseout: function (e) {
//       for (i in e.target._eventParents) {
//         e.target._eventParents[i].resetStyle(e.target);
//       }
//     },
//     mouseover: highlightFeature,
//   });
//   var popupContent =
//     '<table>\
//               <tr>\
//                   <td colspan="2">' +
//     (feature.properties["Name"] !== null
//       ? Autolinker.link(feature.properties["Name"].toLocaleString())
//       : "") +
//     '</td>\
//               </tr>\
//               <tr>\
//                   <td colspan="2">' +
//     (feature.properties["Images"] !== null
//       ? Autolinker.link(feature.properties["Images"].toLocaleString())
//       : "") +
//     "</td>\
//               </tr>\
//           </table>";
//   layer.bindPopup(popupContent, { maxHeight: 400 });
// }

// const layerSurveyMakri = new L.geoJson(jsonSurveyMakri, {
//   attribution: "",
//   interactive: true,
//   dataVar: "jsonSurveyMakri",
//   layerName: "layerSurveyMakri",
//   pane: "paneSurveyMakri",
//   onEachFeature: pop_survey_makri_7,
//   pointToLayer: function (feature, latlng) {
//     var context = {
//       feature: feature,
//       variables: {},
//     };
//     return L.shapeMarker(latlng, style_survey_makri_7_0(feature));
//   },
// });
