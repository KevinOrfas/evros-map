var layerErosion = new L.geoJson(jsonErosion, {
  attribution: "",
  interactive: true,
  dataVar: "jsonErosion",
  layerName: "layerErosion",
  pane: "paneErosion",
  style: {
    pane: "paneErosion",
    opacity: 1,
    color: "red",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1.0,
    fill: true,
    fillOpacity: 0.5,
    fillColor: "red",
    interactive: true
  },
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

var layerCement = new L.geoJson(jsonCement, {
  attribution: "",
  interactive: true,
  dataVar: "jsonCement",
  layerName: "layerCement",
  pane: "paneCement",
  onEachFeature: eventsCement,
  style: {
    pane: "paneCement",
    opacity: 1,
    color: "rgba(102,51,24,1.0)",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1.0,
    fill: true,
    fillOpacity: 0.5,
    fillColor: "rgba(155,152,147,1.0)",
    interactive: true
  }
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
