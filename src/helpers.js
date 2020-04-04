const highlightFeature = (e) => {
  const layer = e.target;

  if (e.target.feature.geometry.type === "LineString") {
    layer.setStyle({
      color: "blue",
    });
  } else {
    layer.setStyle({
      fillColor: layer.defaultOptions.style.color,
      fillOpacity: 1,
    });
  }
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
  // info.update(layer.feature.properties);
};

const resetHighlight = (e) => {
  for (i in e.target._eventParents) {
    e.target._eventParents[i].resetStyle(e.target);
  }
  // info.update();
};

const zoomToFeature = (e) => {
  map.fitBounds(e.target.getBounds());
};

const showDescription = (properties) => {
  const props = { ...properties, desc: "Άλλο" };
  if (props.category === "wastes") {
    props.desc = "Ρύπανση από Στερεά Απόβλητα";
  } else if (props.category === "pesticides") {
    props.desc = "Ρύπανση από Φυτοφάρμακα";
  }
  return props.category !== null
    ? Autolinker.link(props.desc.toLocaleString())
    : props.desc;
};

const iconByName = (name) => `<i class="icon icon-${name}"></i>`;
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
    identifiers.iconUrl = `../markers/${feature}.svg`;
  }
  return { ...iconOptions, ...identifiers };
};
const featureIcon = (feature) => {
  return L.divIcon(determineIconType(feature));
};
const featureToMarker = (feature, latlng) => {
  return L.marker(latlng, {
    icon: featureIcon(feature),
  });
};
const pinIcon = (name) => (point) => {
  L.marker(point, { icon: featureIcon(name) }).addTo(map);
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
