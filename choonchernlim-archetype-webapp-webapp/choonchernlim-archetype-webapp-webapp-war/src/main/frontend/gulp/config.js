/**
 * Configuration for Gulp tasks.
 */

'use strict';

// war root dir
var base = '../../..';
var dest = base + '/src/main/webapp/resources';
var src = base + '/src/main/frontend/src';

var externalLibs = ['bluebird', 'jquery', 'lodash', 'moment', 'bootstrap'];

module.exports = {
    browserSync : {
        files : dest,
        proxy : "localhost:7777/choonchernlim-archetype-webapp-webapp"
    },
    sass        : {
        src      : src + '/scss/**/*.scss',
        dest     : dest + '/css',
        settings : {}
    },
    images      : {
        src  : src + "/img/**",
        dest : dest + "/img"
    },
    browserify  : {
        externalLibs  : externalLibs,
        bundleConfigs : [
            {
                dest       : dest + '/js',
                outputName : 'vendor.js',
                require    : externalLibs
            }, {
                entries    : src + '/js/app.js',
                dest       : dest + '/js',
                outputName : 'app.js',
                external   : externalLibs,
                paths      : ['./node_modules']
            }
        ]
    },
    production  : {
        cssSrc  : [dest + '/css/*.css', '!' + dest + '/css/*.css'],
        jsSrc   : [dest + '/js/*.js', '!' + dest + '/js/*.js'],
        cssDest : dest + '/css',
        jsDest  : dest + '/js'
    }
};