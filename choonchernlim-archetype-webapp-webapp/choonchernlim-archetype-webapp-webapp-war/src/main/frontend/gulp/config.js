/**
 * Configuration for Gulp tasks.
 */

'use strict';

// war root dir
var base = '../../..';
var dest = base + '/src/main/webapp/resources/dist';
var src = base + '/src/main';

var externalLibs = ['bluebird', 'jquery', 'lodash', 'moment', 'bootstrap'];

module.exports = {
    sass       : {
        src      : src + '/scss/**/*.scss',
        dest     : dest,
        settings : {}
    },
    browserify : {
        // Enable source maps
        debug         : true,
        bundleConfigs : [
            {
                dest       : dest,
                outputName : 'vendor.js',
                require    : externalLibs
            }, {
                entries    : src + '/js/app.js',
                dest       : dest,
                outputName : 'app.js',
                external   : externalLibs
            }
        ]
    },
    production : {
        cssSrc : dest + '/*.css',
        jsSrc  : dest + '/*.js',
        dest   : dest
    }
};