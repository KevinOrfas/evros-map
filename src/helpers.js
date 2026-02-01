import { qualityMap, pollutionMap, climateMap } from './translations';

const resetHighlight = (e) => {
  for (const i in e.target._eventParents) {
    e.target._eventParents[i].resetStyle(e.target);
  }
};

const highlightFeature = (e) => {
  const layer = e.target;
  const type = e.target.feature.geometry.type;
  if (type === 'LineString') {
    layer.setStyle({
      color: '#fff',
    });
  } else if (type === 'MultiPolygon') {
    layer.setStyle({
      fillColor: layer.defaultOptions.style.color,
      fillOpacity: 1,
    });
  }
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
};

const zoomToFeature = (map) => (e) => {
  map.fitBounds(e.target.getBounds());
};

const determineIconType = (feature) => {
  const iconOptions = {
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  };
  if (typeof feature === 'string') {
    iconOptions.className = `m-${feature}`;
  } else if (typeof feature === 'object') {
    iconOptions.className = `m-${feature.properties.amenity}`;
  }
  return iconOptions;
};

const featureIcon = (feature) => L.divIcon(determineIconType(feature));
const featureToMarker = (feature, latlng) => {
  return L.marker(latlng, {
    icon: featureIcon(feature),
  });
};

const swapArr = (array, i, j) => ([array[i], array[j]] = [array[j], array[i]]);
const createMarker =
  (name) =>
  ({ geometry }) => {
    const coords = swapArr(geometry.coordinates, 0, 1);
    return L.marker(coords, { icon: featureIcon(name) });
  };
const byCategory =
  (category, filter) =>
  ({ properties }) => {
    return properties[category] === filter;
  };

const capitalize = (s) => {
  return typeof s !== 'string' ? '' : s.charAt(0).toUpperCase() + s.slice(1);
};
const makeMarkersVisible = (collection) => {
  collection.forEach((marker) => {
    marker.classList.add('marker-visible');
    marker.classList.remove('marker-hidden');
  });
};
const makeMarkersInvisible = (collection) => {
  collection.forEach((marker) => {
    marker.classList.remove('marker-visible');
    marker.classList.add('marker-hidden');
  });
};
const convertToHtmlElement = (stringElement) => {
  const radioFragment = document.createElement('div');
  radioFragment.innerHTML = stringElement;
  return radioFragment.firstChild;
};
const createRadioElement = (name, checked, { id }, className) => {
  let radioInput;
  try {
    // IE7 bugs out if you create a radio dynamically, so you have to do it
    // this hacky way (see http://bit.ly/PqYLBe)
    radioInput = document.createElement('input');
    radioInput.classList.add(`${className}-selector`);
    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', name);
    radioInput.setAttribute('id', id);
    if (checked) {
      radioInput.setAttribute('checked', 'checked');
    }
  } catch (err) {
    let radioStringElement = `<input type="radio" class="${className}-selector" name="${name}" id="${id}"`;
    if (checked) {
      radioStringElement += ' checked="checked"';
    }
    radioStringElement += '/>';
    radioInput = convertToHtmlElement(radioStringElement);
  }
  return radioInput;
};
const resetIcons = () => {
  const allMarkers = document.querySelectorAll('.leaflet-marker-icon');
  makeMarkersInvisible(allMarkers);
};

const markersHandler = {
  cement: (isVisible) => {
    const cementMarkers = document.querySelectorAll('.m-cement');
    if (isVisible) {
      makeMarkersVisible(cementMarkers);
    } else {
      makeMarkersInvisible(cementMarkers);
    }
  },
  climate: (isVisible) => {
    const desertificationMarkers = document.querySelectorAll('.m-desertification');
    const fireMarkers = document.querySelectorAll('.m-fire');
    const floodMarkers = document.querySelectorAll('.m-flood');
    if (isVisible) {
      makeMarkersVisible(desertificationMarkers);
      makeMarkersVisible(fireMarkers);
      makeMarkersVisible(floodMarkers);
    } else {
      makeMarkersInvisible(desertificationMarkers);
      makeMarkersInvisible(fireMarkers);
      makeMarkersInvisible(floodMarkers);
    }
  },
  erosion: (isVisible) => {
    const erosionMarkers = document.querySelectorAll('.m-erosion');
    if (isVisible) {
      makeMarkersVisible(erosionMarkers);
    } else {
      makeMarkersInvisible(erosionMarkers);
    }
  },
  overgrazing: (isVisible) => {
    const overgrazingMarkers = document.querySelectorAll('.m-overgrazing');
    if (isVisible) {
      makeMarkersVisible(overgrazingMarkers);
    } else {
      makeMarkersInvisible(overgrazingMarkers);
    }
  },
  pollution: (isVisible) => {
    const wastesMarkers = document.querySelectorAll('.m-wastes');
    const pesticidesMarkers = document.querySelectorAll('.m-pesticides');
    const pollutionMiscMarkers = document.querySelectorAll('.m-pollution');
    if (isVisible) {
      makeMarkersVisible(wastesMarkers);
      makeMarkersVisible(pesticidesMarkers);
      makeMarkersVisible(pollutionMiscMarkers);
    } else {
      makeMarkersInvisible(wastesMarkers);
      makeMarkersInvisible(pesticidesMarkers);
      makeMarkersInvisible(pollutionMiscMarkers);
    }
  },
  quality: (isVisible) => {
    const qualityGoodMarkers = document.querySelectorAll('.m-quality-good');
    const qualityBadMarkers = document.querySelectorAll('.m-quality-bad');
    if (isVisible) {
      makeMarkersVisible(qualityGoodMarkers);
      makeMarkersVisible(qualityBadMarkers);
    } else {
      makeMarkersInvisible(qualityGoodMarkers);
      makeMarkersInvisible(qualityBadMarkers);
    }
  },
};

const setIconClass = ({ icon, name }) => {
  return L.DomUtil.create('i', `icon ${icon}-${name.toLowerCase()}`);
};
const isEmptyArray = (array) => !Array.isArray(array) || !array.length;

const generateTable = (data) => {
  const translations = new Map([...qualityMap, ...pollutionMap, ...climateMap]);

  const table = L.DomUtil.create('table');
  data.forEach((item) => {
    const row = table.insertRow();
    row.appendChild(row.insertCell().appendChild(setIconClass(item)));
    row.appendChild(
      row
        .insertCell()
        .appendChild(
          document.createTextNode(
            capitalize(item.name.replace(item.name, translations.get(item.name)))
          )
        )
    );
  });
  return table;
};

export {
  capitalize,
  isEmptyArray,
  generateTable,
  createRadioElement,
  markersHandler,
  resetIcons,
  createMarker,
  featureToMarker,
  featureIcon,
  byCategory,
  resetHighlight,
  highlightFeature,
  zoomToFeature,
  convertToHtmlElement,
};
