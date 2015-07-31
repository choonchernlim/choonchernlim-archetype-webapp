/**
 * Creates vendor bundle and app bundle.
 *
 * When running Watchify, the source maps are attached to the minified files.
 */

'use strict';

var browserify = require( 'browserify' );
var browserSync = require( 'browser-sync' );
var watchify = require( 'watchify' );
var mergeStream = require( 'merge-stream' );
var bundleLogger = require( '../util/bundleLogger' );
var gulp = require( 'gulp' );
var handleErrors = require( '../util/handleErrors' );
var source = require( 'vinyl-source-stream' );
var config = require( '../config' ).browserify;
var _ = require( 'lodash' );

var browserifyTask = function ( devMode ) {

    var browserifyThis = function ( bundleConfig ) {

        // Only enable watch on project files (non-vendor files)
        var enableWatch = devMode && bundleConfig.external;

        // if watch is enabled, add in watchify arguments
        var b = browserify( enableWatch ?
            _.extend( bundleConfig, watchify.args, {debug : true} ) :
            bundleConfig );

        var bundle = function () {
            return b.bundle()
                .on( 'error', handleErrors )
                .pipe( source( bundleConfig.outputName ) )
                .pipe( gulp.dest( bundleConfig.dest ) )
                .pipe( browserSync.reload( {stream : true} ) );
        };

        if ( enableWatch ) {
            bundleLogger.start( bundleConfig.outputName );

            b = watchify( b );
            b.on( 'update', bundle );

            bundleLogger.watch( bundleConfig.outputName );
        }

        if ( bundleConfig.require ) {
            b.require( bundleConfig.require );
        }

        if ( bundleConfig.external ) {
            b.external( bundleConfig.external );
        }

        return bundle();
    };

    // Start bundling with Browserify for each bundleConfig specified
    return mergeStream.apply( gulp, _.map( config.bundleConfigs, browserifyThis ) );

};

gulp.task( 'browserify', function () {
    return browserifyTask()
} );

// Exporting the task so we can call it directly in our watch task, with the 'devMode' option
module.exports = browserifyTask;
