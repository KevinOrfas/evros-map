const determineIconType = (feature) => {
  const iconOptions = {
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  };
  const identifiers = { className: "", iconUrl: "" };
  if (typeof feature === "object") {
    identifiers.className = `m-${feature.properties.amenity}`;
    identifiers.iconUrl = `../markers/${feature.properties.amenity}.svg`;
  } else if (typeof feature === "string") {
    identifiers.className = `m-${feature}`;
    identifiers.iconUrl = `../src/markers/${feature}.svg`;
  }
  return { ...iconOptions, ...identifiers };
};

const featureToMarker = (feature, latlng) => {
  return L.marker(latlng, {
    icon: featureIcon(feature),
  });
};
const featureIcon = (feature) => {
  return L.divIcon(determineIconType(feature));
};

const getCenterOfPolygon = (elm) => {
  return turf.centroid(turf.multiPolygon(elm.geometry.coordinates));
};
const swapArr = (array, i, j) => ([array[i], array[j]] = [array[j], array[i]]);
const swapCoord = ({ geometry }) => swapArr(geometry.coordinates, 0, 1);

const byFeature = (filter) => ({ properties }) => {
  return properties.category === filter;
};
const byCategory = (filter, category) => ({ properties }) => {
  return properties[category] === filter;
};

const capitalize = (s) => {
  return typeof s !== "string" ? "" : s.charAt(0).toUpperCase() + s.slice(1);
};
const makeMarkersVisible = (collection) => {
  collection.forEach((marker) => {
    marker.classList.add("marker-visible");
    marker.classList.remove("marker-hidden");
  });
};
const makeMarkersInvisible = (collection) => {
  collection.forEach((marker) => {
    marker.classList.remove("marker-visible");
    marker.classList.add("marker-hidden");
  });
};
const convertToHtmlElement = (stringElement) => {
  const radioFragment = document.createElement("div");
  radioFragment.innerHTML = stringElement;
  return radioFragment.firstChild;
};
const createRadioElement = (name, checked, { id }, className) => {
  let radioInput;
  try {
    // IE7 bugs out if you create a radio dynamically, so you have to do it
    // this hacky way (see http://bit.ly/PqYLBe)
    radioInput = document.createElement("input");
    radioInput.classList.add(`${className}-selector`);
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("name", name);
    radioInput.setAttribute("id", obj.id);
    if (checked) {
      radioInput.setAttribute("checked", "checked");
    }
  } catch (err) {
    let radioStringElement = `<input type="radio" class="${className}-selector" name="${name}" id="${id}"`;
    if (checked) {
      radioStringElement += ' checked="checked"';
    }
    radioStringElement += "/>";
    radioInput = convertToHtmlElement(radioStringElement);
  }
  return radioInput;
};

const cementMarkers = document.querySelectorAll(".m-cement");
const erosionMarkers = document.querySelectorAll(".m-erosion");
const overgrazingMarkers = document.querySelectorAll(".m-overgrazing");
const qualityMarkers = document.querySelectorAll(".m-quality");
const fireMarkers = document.querySelectorAll(".m-fire");
const floodMarkers = document.querySelectorAll(".m-flood");
const wastesMarkers = document.querySelectorAll(".m-wastes");
const pesticidesMarkers = document.querySelectorAll(".m-pesticides");
const pollutionMiscMarkers = document.querySelectorAll(".m-pollution");
const desertificationMarkers = document.querySelectorAll(".m-desertification");
const qualityGoodMarkers = document.querySelectorAll(".m-quality-good");
const qualityBadMarkers = document.querySelectorAll(".m-quality-bad");
const visMarkersHandler = {
  erosion: () => {
    makeMarkersVisible(erosionMarkers);
  },
  overgrazing: () => {
    makeMarkersVisible(overgrazingMarkers);
  },
  cement: () => {
    makeMarkersVisible(cementMarkers);
  },
  pollution: () => {
    makeMarkersVisible(wastesMarkers);
    makeMarkersVisible(pesticidesMarkers);
    makeMarkersVisible(pollutionMiscMarkers);
  },
  desertification: () => {
    makeMarkersVisible(desertificationMarkers);
  },
  fire: () => {
    makeMarkersVisible(fireMarkers);
  },
  flood: () => {
    makeMarkersVisible(floodMarkers);
  },
  quality: () => {
    makeMarkersVisible(qualityGoodMarkers);
    makeMarkersVisible(qualityBadMarkers);
  },
  climate: () => {
    makeMarkersVisible(desertificationMarkers);
    makeMarkersVisible(fireMarkers);
    makeMarkersVisible(floodMarkers);
  },
};
const invisMarkersHandler = {
  erosion: () => {
    makeMarkersInvisible(erosionMarkers);
  },
  overgrazing: () => {
    makeMarkersInvisible(overgrazingMarkers);
  },
  cement: () => {
    makeMarkersInvisible(cementMarkers);
  },
  pollution: () => {
    makeMarkersInvisible(wastesMarkers);
    makeMarkersInvisible(pesticidesMarkers);
    makeMarkersInvisible(pollutionMiscMarkers);
  },
  desertification: () => {
    makeMarkersInvisible(desertificationMarkers);
  },
  fire: () => {
    makeMarkersInvisible(fireMarkers);
  },
  flood: () => {
    makeMarkersInvisible(floodMarkers);
  },
  quality: () => {
    makeMarkersInvisible(qualityGoodMarkers);
    makeMarkersInvisible(qualityBadMarkers);
  },
  climate: () => {
    makeMarkersInvisible(desertificationMarkers);
    makeMarkersInvisible(fireMarkers);
    makeMarkersInvisible(floodMarkers);
  },
};
const setIconClass = ({ icon, name }) => {
  return L.DomUtil.create("i", `icon ${icon}-${name.toLowerCase()}`);
};
const isEmptyArray = (array) => !Array.isArray(array) || !array.length;

const generateTable = (data) => {
  const translations = new Map([...qualityMap, ...pollutionMap, ...climateMap]);

  const table = L.DomUtil.create("table");
  data.forEach((item) => {
    const row = table.insertRow();
    row.appendChild(row.insertCell().appendChild(setIconClass(item)));
    row.appendChild(
      row
        .insertCell()
        .appendChild(
          document.createTextNode(
            capitalize(
              item.name.replace(item.name, translations.get(item.name))
            )
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
  invisMarkersHandler,
  visMarkersHandler,
  swapCoord,
  featureToMarker,
  featureIcon,
};
