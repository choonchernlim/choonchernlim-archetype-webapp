/**
 * Configuration for Gulp tasks.
 *
 * @type {{browserify: {entryFile: string, srcDir: string, outputDir: string}}}
 */

module.exports = {
    browserify : {
        appFile    : 'app.js',
        vendorFile : 'vendor.js',
        appSrcDir  : './src/main/webapp/resources/app/',
        distDir    : './src/main/webapp/resources/dist/',
        vendorLibs : [
            'bluebird',
            'jquery',
            'lodash',
            'moment'
        ]
    }
};