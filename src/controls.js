import './leaflet-panel-layers';
import {
  cementLayer,
  climateLayer,
  erosionLayer,
  overgrazingLayer,
  pollutionLayer,
  qualityLayer,
} from './layers';

const iconByName = (name) => `<i class="icon icon-${name}"></i>`;
const conf = {
  base: {
    layers: [
      {
        group: {
          name: 'Χάρτες',
        },
        collapsed: true,
        layers: [
          {
            name: 'Google',
            active: true,
            layer: L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
              opacity: 1.0,
              attribution:
                '<a href="https://qgis.org">QGIS</a>  &middot; <a href="https://github.com/kevinorfas" target="_blank">Anastasios Orfanidis</a> | <a href="https://www.linkedin.com/in/george-gkaletsas-786038144/" target="_blank">George Galetsa</a>',
              minZoom: 1,
              maxZoom: 28,
              minNativeZoom: 0,
              maxNativeZoom: 18,
            }),
          },
          {
            name: 'Topomaps',
            layer: {
              type: 'tileLayer',
              args: ['https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'],
            },
          },
        ],
      },
    ],
  },
  overLayers: [
    {
      name: 'climate',
      icon: '',
      layer: climateLayer,
      subcategories: [
        {
          name: 'desertification',
          icon: 'icon',
        },
        {
          name: 'flood',
          icon: 'icon',
        },
        {
          name: 'fire',
          icon: 'icon',
        },
      ],
    },
    {
      name: 'pollution',
      icon: '',
      layer: pollutionLayer,
      subcategories: [
        {
          name: 'wastes',
          icon: 'icon',
        },
        {
          name: 'pesticides',
          icon: 'icon',
        },
      ],
    },
    {
      name: 'erosion',
      icon: iconByName('erosion'),
      layer: erosionLayer,
    },
    {
      name: 'cement',
      icon: iconByName('cement'),
      layer: cementLayer,
    },
    {
      name: 'overgrazing',
      icon: iconByName('overgrazing'),
      layer: overgrazingLayer,
    },
    {
      name: 'quality',
      icon: '',
      layer: qualityLayer,
      subcategories: [
        {
          name: 'good',
          icon: 'icon-quality',
        },
        {
          name: 'bad',
          icon: 'icon-quality',
        },
      ],
    },
  ],
  loss: [
    {
      name: 'Loss',
      layer: {
        type: 'tileLayer',
        args: ['http://earthengine.google.org/static/hansen_2013/loss_alpha/{z}/{x}/{y}.png'],
      },
    },
  ],
};

const panelLayers = new L.Control.PanelLayers(null, conf.overLayers);
const lossLayers = new L.Control.PanelLayers(null, conf.loss, {
  compact: true,
  position: 'bottomright',
  className: 'loss',
});

export { conf, panelLayers, lossLayers };
