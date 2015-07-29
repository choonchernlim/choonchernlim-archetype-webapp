'use strict';

var baseConfig = require( './karma.conf' );

module.exports = function ( config ) {
    // Load base config
    baseConfig( config );

    // Override base config
    config.set( {
        singleRun : true,
        autoWatch : false
    } );
};