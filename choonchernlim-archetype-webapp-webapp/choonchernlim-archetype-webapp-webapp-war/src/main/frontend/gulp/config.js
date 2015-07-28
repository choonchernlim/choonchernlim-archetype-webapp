/**
 * Configuration for Gulp tasks.
 */

var externalLibs = ['bluebird', 'jquery', 'lodash', 'moment'];
var dest = '../../../src/main/webapp/resources/js/';

module.exports = {
    browserify : {
        // Enable source maps
        debug         : true,
        bundleConfigs : [
            {
                dest       : dest,
                outputName : 'vendor.min.js',
                require    : externalLibs
            }, {
                entries    : './app/app.js',
                dest       : dest,
                outputName : 'app.min.js',
                external   : externalLibs
            }
        ]
    }
};