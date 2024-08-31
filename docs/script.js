import 'https://unpkg.com/maplibre-gl/dist/maplibre-gl.js';
import './h3j_h3t.js';

const map = new maplibregl.Map({
  "container": 'map',
  "style": 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
  "center": [-3.703622869000082, 40.41711423898472],
  "zoom": 15, "pitch": 30,
})

map.on('load', e => {
  map.addH3JSource(
    'h3j_testsource',
    {
      "data": 'sample.h3j',
      "attribution": "© <a href='https://www.inspide.com/'>Inspide</a>"
    }
  ).then(m => m.addLayer({
    "id": 'h3j_testlayer',
    "type": 'fill-extrusion',
    "source": 'h3j_testsource',
    'paint': {
      'fill-extrusion-color': [
        'interpolate-lab',
        ['linear'],
        ['get', 'value'],
        0, '#430254',
        21.864, '#f83c70'
      ],
      'fill-extrusion-height': [
        'interpolate',
        ['linear'],
        ['zoom'],
        14,
        0,
        15.05,
        ['*', 10, ['get', 'value']]
      ],
      'fill-extrusion-opacity': 0.7
    }
  })
  )
})
