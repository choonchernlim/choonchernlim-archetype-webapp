/**
 * Configuration for Gulp tasks.
 */

var externalLibs = ['bluebird', 'jquery', 'lodash', 'moment'];
var dest = './src/main/webapp/resources/dist/';

module.exports = {
    browserify : {
        // Enable source maps
        debug         : true,
        // Additional file extensions to make optional
        extensions    : ['.hbs'],
        bundleConfigs : [
            {
                dest       : dest,
                outputName : 'vendor.js',
                require    : externalLibs
            }, {
                entries    : './src/main/webapp/resources/app/app.js',
                dest       : dest,
                outputName : 'app.js',
                external   : externalLibs
            }
        ]
    }
};