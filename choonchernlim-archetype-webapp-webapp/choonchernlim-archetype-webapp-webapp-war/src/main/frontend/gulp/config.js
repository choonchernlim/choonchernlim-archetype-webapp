/**
 * Configuration for Gulp tasks.
 */

'use strict';

var externalLibs = ['bluebird', 'jquery', 'lodash', 'moment'];
var dest = '../../../src/main/webapp/resources/dist';
var src = './app';

module.exports = {
    sass       : {
        src  : src + "/scss/**/*.scss",
        dest : dest
    },
    browserify : {
        // Enable source maps
        debug         : true,
        bundleConfigs : [
            {
                dest       : dest,
                outputName : 'vendor.min.js',
                require    : externalLibs
            }, {
                entries    : src + '/js/app.js',
                dest       : dest,
                outputName : 'app.min.js',
                external   : externalLibs
            }
        ]
    }
};