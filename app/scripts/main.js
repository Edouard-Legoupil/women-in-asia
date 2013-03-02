require.config({

    paths: {
        'jquery': 'vendor/jquery-1.9.1',
        'd3': '/components/d3/d3',
        'leaflet': '/components/leaflet/dist/leaflet',
        'topojson': 'vendor/topojson'
    },

    shim: {
        'jquery': { exports: '$' },
        'd3': { exports: 'd3' },
        'leaflet': { exports: 'L' },
        'topojson': { exports: 'topojson' }
    },

});

require(['jquery', 'd3', 'leaflet', 'topojson', 'app'], function ($, d3, L, topojson, app) {
    'use strict';
    app.init();
});