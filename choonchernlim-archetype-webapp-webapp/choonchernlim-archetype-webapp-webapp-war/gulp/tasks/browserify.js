/**
 * Creates vendor bundle and app bundle.
 *
 * @type {Browserify|exports|module.exports}
 */

var browserify = require( 'browserify' );
var gulp = require( 'gulp' );
var source = require( 'vinyl-source-stream' );
var config = require( '../config' ).browserify;

gulp.task( 'browserify-vendor', function () {
    return browserify()
        .require( config.vendorLibs )
        .bundle()
        .pipe( source( config.vendorFile ) )
        .pipe( gulp.dest( config.distDir ) );
} );

gulp.task( 'browserify-app', function () {
    return browserify( config.appSrcDir + config.appFile )
        .external( config.vendorLibs )
        .bundle()
        .pipe( source( config.appFile ) )
        .pipe( gulp.dest( config.distDir ) );
} );

gulp.task( 'browserify', ['browserify-vendor', 'browserify-app'] );