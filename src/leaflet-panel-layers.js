import "leaflet";
import "leaflet-hash";
import "leaflet-svg-shape-markers";
import "leaflet.pattern";
import "../libs/multi-style-layer";

import { controlsMap } from "./translations";
import {
  capitalize,
  isEmptyArray,
  generateTable,
  createRadioElement,
  markersHandler,
} from "./helpers";

L.Control.PanelLayers = L.Control.Layers.extend({
  includes: L.version[0] === "1" ? L.Evented.prototype : L.Mixin.Events,

  options: {
    compact: true,
    compactOffset: 0,
    collapsed: false,
    autoZIndex: true,
    collapsibleGroups: true,
    buildItem: null, //function that return row item html node(or html string)
    title: "", //title of panel
    className: "", //additional class name for panel
    position: "topright",
  },

  initialize: function (baseLayers, overlays, options) {
    L.setOptions(this, options);
    this._layers = [];
    this._groups = {};
    this._items = {};
    this._layersActives = [];
    this._lastZIndex = 0;
    this._handlingClick = false;

    this.className = "leaflet-panel-layers";

    var i, n, isCollapsed;

    for (i in baseLayers) {
      if (baseLayers[i].group && baseLayers[i].layers) {
        isCollapsed = baseLayers[i].collapsed || false;
        for (n in baseLayers[i].layers) {
          this._addLayer(
            baseLayers[i].layers[n],
            false,
            baseLayers[i].group,
            isCollapsed
          );
        }
      } else {
        this._addLayer(baseLayers[i], false);
      }
    }

    for (i in overlays) {
      if (overlays[i].group && overlays[i].layers) {
        isCollapsed = overlays[i].collapsed || false;
        for (n in overlays[i].layers) {
          this._addLayer(
            overlays[i].layers[n],
            true,
            overlays[i].group,
            isCollapsed
          );
        }
      } else {
        this._addLayer(overlays[i], true);
      }
    }
  },

  onAdd: function (map) {
    var self = this;

    for (var i in this._layersActives) {
      map.addLayer(this._layersActives[i]);
    }

    L.Control.Layers.prototype.onAdd.call(this, map);

    this._map.on("resize", function (e) {
      self._updateHeight(e.newSize.y);
    });

    return this._container;
  },

  //TODO addBaseLayerGroup
  //TODO addOverlayGroup

  addBaseLayer: function (layer, name, group) {
    layer.name = name || layer.name || "";
    this._addLayer(layer, false, group);
    this._update();
    return this;
  },

  addOverlay: function (layer, name, group) {
    layer.name = name || layer.name || "";
    this._addLayer(layer, true, group);
    this._update();
    return this;
  },

  removeLayer: function (layerDef) {
    const layer = layerDef.hasOwnProperty("layer")
      ? this._layerFromDef(layerDef)
      : layerDef;

    this._map.removeLayer(layer);

    L.Control.Layers.prototype.removeLayer.call(this, layer);
    return this;
  },

  clearLayers: function () {
    this._layers.forEach((layer) => {
      this.removeLayer(layer);
    });
  },

  _layerFromDef: function (layerDef) {
    for (var i = 0; i < this._layers.length; i++) {
      var id = L.stamp(this._layers[i].layer);
      //TODO add more conditions to comparing definitions
      if (this._getLayer(id).name === layerDef.name) {
        return this._getLayer(id).layer;
      }
    }
  },

  _update: function () {
    this._groups = {};
    this._items = {};
    L.Control.Layers.prototype._update.call(this);
  },

  _getLayer: function (id) {
    for (var i = 0; i < this._layers.length; i++) {
      if (this._layers[i] && this._layers[i].id == id) {
        return this._layers[i];
      }
    }
  },

  _addLayer: function (layerDef, overlay, group, isCollapsed) {
    if (!layerDef.layer) {
      throw new Error("layer not defined in item: " + (layerDef.name || ""));
    }

    if (
      !(layerDef.layer instanceof L.Class) &&
      layerDef.layer.type &&
      layerDef.layer.args
    ) {
      layerDef.layer = this._getPath(L, layerDef.layer.type).apply(
        L,
        layerDef.layer.args
      );
    }

    if (!layerDef.hasOwnProperty("id")) {
      layerDef.id = L.stamp(layerDef.layer);
    }

    if (layerDef.active) {
      this._layersActives.push(layerDef.layer);
    }

    this._layers.push(
      L.Util.extend(layerDef, {
        collapsed: isCollapsed,
        overlay: overlay,
        group: group,
      })
    );

    if (this.options.autoZIndex && layerDef.layer && layerDef.layer.setZIndex) {
      this._lastZIndex++;
      layerDef.layer.setZIndex(this._lastZIndex);
    }
  },

  _createItem: function (obj) {
    const item = L.DomUtil.create(
      "div",
      `${this.className}-item${obj.active ? " active" : ""}`
    );

    const checked = this._map.hasLayer(obj.layer);
    const createInput = () => {
      let input;
      if (obj.overlay) {
        input = L.DomUtil.create("input", `${this.className}-selector`);
        input.type = "checkbox";
        input.defaultChecked = checked;
      } else {
        input = this._createRadioElement("leaflet-base-layers", checked, obj);
      }
      input.value = obj.id;
      input.layerId = obj.id;
      input.id = obj.id;
      input._layer = obj;
      return input;
    };

    const input = createInput();
    L.DomEvent.on(
      input,
      "click",
      (e) => {
        this._onInputClick();
        const copy = e.target.nextElementSibling.getAttribute("data-title");
        const action = markersHandler[copy];
        if (action) {
          if (e.target.checked) {
            action(true);
            this.fire("panel:selected", e.target._layer);
          } else {
            action(false);
            this.fire("panel:unselected", e.target._layer);
          }
        }
      },
      this
    );

    const label = L.DomUtil.create("label", `${this.className}-title`);
    label.htmlFor = input.id;
    const title = L.DomUtil.create("span");
    title.setAttribute("data-title", obj.name);

    title.innerHTML = capitalize(controlsMap.get(obj.name)) || "";

    if (!isEmptyArray(obj.subcategories)) {
      const div = L.DomUtil.create("div");
      div.appendChild(generateTable(obj.subcategories));
      title.appendChild(div);
    }

    if (obj.icon) {
      const iconTag = L.DomUtil.create("i", `${this.className}-icon`);
      iconTag.innerHTML = obj.icon || "";
      label.appendChild(iconTag);
    }

    label.appendChild(input);
    label.appendChild(title);

    const fakeCheckBox = L.DomUtil.create("span", "checkmark");
    label.appendChild(fakeCheckBox);
    item.appendChild(label);

    if (this.options.buildItem) {
      const node = this.options.buildItem.call(this, obj); //custom node node or html string
      if (typeof node === "string") {
        item.appendChild(convertToHtmlElement(node));
      } else {
        item.appendChild(node);
      }
    }

    this._items[input.value] = item;

    return item;
  },

  _createRadioElement: function (name, checked, obj) {
    return createRadioElement(name, checked, obj, this.className);
  },

  _addItem: function (obj) {
    let self = this,
      label,
      input,
      icon,
      checked;

    let list = obj.overlay ? this._overlaysList : this._baseLayersList;
    if (obj.group) {
      if (!obj.group.hasOwnProperty("name")) {
        obj.group = { name: obj.group };
      }

      if (!this._groups[obj.group.name]) {
        let collapsed = false;
        if (obj.collapsed === true) {
          collapsed = true;
        }
        this._groups[obj.group.name] = this._createGroup(obj.group, collapsed);
      }

      list.appendChild(this._groups[obj.group.name]);
      list = this._groups[obj.group.name];
    }

    label = this._createItem(obj);

    list.appendChild(label);

    return label;
  },

  _createGroup: function (groupdata, isCollapsed) {
    var self = this,
      groupdiv = L.DomUtil.create("div", `${this.className}-group`),
      grouplabel,
      grouptit,
      groupexp;

    grouplabel = L.DomUtil.create(
      "label",
      `${this.className}-grouplabel`,
      groupdiv
    );

    if (this.options.collapsibleGroups) {
      L.DomUtil.addClass(groupdiv, "collapsible");

      groupexp = L.DomUtil.create("i", `${this.className}-icon`, grouplabel);
      if (isCollapsed === true) {
        groupexp.innerHTML = " + ";
      } else {
        groupexp.innerHTML = " - ";
      }

      L.DomEvent.on(grouplabel, "click", function () {
        if (L.DomUtil.hasClass(groupdiv, "expanded")) {
          L.DomUtil.removeClass(groupdiv, "expanded");
          groupexp.innerHTML = " + ";
        } else {
          L.DomUtil.addClass(groupdiv, "expanded");
          groupexp.innerHTML = " - ";
        }
        self._updateHeight();
      });

      if (isCollapsed === false) {
        L.DomUtil.addClass(groupdiv, "expanded");
      }
    }

    grouptit = L.DomUtil.create("span", `${this.className}-title`, grouplabel);

    grouptit.innerHTML = groupdata.name;

    return groupdiv;
  },

  _onInputClick: function () {
    const inputs = this._form.querySelectorAll(`.${this.className}-selector`);

    this._handlingClick = true;

    inputs.forEach((input) => {
      const { checked, value, parentNode } = input;
      const { layer } = this._getLayer(input.value);

      if (checked && !this._map.hasLayer(layer)) {
        L.DomUtil.addClass(parentNode.parentNode, "active");
        this._map.addLayer(layer);
      } else if (!checked && this._map.hasLayer(layer)) {
        L.DomUtil.removeClass(parentNode.parentNode, "active");
        this._map.removeLayer(layer);
      }
    });

    this._handlingClick = false;

    this._refocusOnMap();
  },

  _initLayout: function () {
    const container = L.DomUtil.create("div", this.className);
    this._container = container;

    if (this.options.compact) {
      L.DomUtil.addClass(container, "compact");
    }

    //Makes this work on IE10 Touch devices by stopping it from firing a mouseout event when the touch is released
    container.setAttribute("aria-haspopup", true);

    L.DomEvent.disableClickPropagation(container).disableScrollPropagation(
      container
    );

    if (this.options.className) {
      L.DomUtil.addClass(container, this.options.className);
    }

    this._form = L.DomUtil.create("form", `${this.className}-list`);
    this._section = this._form;

    this._updateHeight();

    if (this.options.collapsed) {
      if (L.Browser.android) {
        L.DomEvent.on(container, "click", this._expand, this);
      } else {
        L.DomEvent.on(container, "mouseenter", this._expand, this).on(
          container,
          "mouseleave",
          this._collapse,
          this
        );
      }

      this._map.on("click", this._collapse, this);
    } else {
      this._expand();
    }

    this._baseLayersList = L.DomUtil.create(
      "div",
      `${this.className}-base`,
      this._form
    );
    this._separator = L.DomUtil.create(
      "div",
      `${this.className}-separator`,
      this._form
    );
    this._overlaysList = L.DomUtil.create(
      "div",
      `${this.className}-overlays`,
      this._form
    );

    if (this.options.title) {
      const titlabel = L.DomUtil.create("label", `${this.className}-title`);
      titlabel.innerHTML = `<span>${this.options.title}</span>`;
      container.appendChild(titlabel);
    }

    container.appendChild(this._form);
  },

  _updateHeight: function (h = this._map.getSize().y) {
    if (this.options.compact) {
      this._form.style.maxHeight = `${h - this.options.compactOffset}px`;
    } else {
      this._form.style.height = `${h}px`;
    }
  },

  _expand: function () {
    L.DomUtil.addClass(this._container, "expanded");
  },

  _collapse: function () {
    this._container.className = this._container.className.replace(
      "expanded",
      ""
    );
  },

  _getPath: function (obj, prop) {
    const parts = prop.split(".");
    const last = parts.pop();
    const len = parts.length;
    let cur = parts[0];
    let i = 1;

    if (len > 0) {
      while ((obj = obj[cur]) && i < len) {
        cur = parts[i++];
      }
    }

    if (obj) {
      return obj[last];
    }
  },
});

L.control.panelLayers = function (baseLayers, overlays, options) {
  return new L.Control.PanelLayers(baseLayers, overlays, options);
};
