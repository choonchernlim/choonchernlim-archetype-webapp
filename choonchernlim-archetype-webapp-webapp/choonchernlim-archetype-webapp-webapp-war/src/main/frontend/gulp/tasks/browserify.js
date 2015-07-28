/**
 * Creates vendor bundle and app bundle.
 *
 * When running Watchify, the source maps are attached to the minified files.
 */

var browserify = require( 'browserify' );
var watchify = require( 'watchify' );
var mergeStream = require( 'merge-stream' );
var bundleLogger = require( '../util/bundleLogger' );
var gulp = require( 'gulp' );
var handleErrors = require( '../util/handleErrors' );
var source = require( 'vinyl-source-stream' );
var config = require( '../config' ).browserify;
var _ = require( 'lodash' );

var uglify = require( 'gulp-uglify' );
var sourcemaps = require( 'gulp-sourcemaps' );
var buffer = require( 'vinyl-buffer' );
var gulpif = require( 'gulp-if' );

var browserifyTask = function ( devMode ) {

    var browserifyThis = function ( bundleConfig ) {

        if ( devMode ) {
            // Add watchify args and debug (sourcemaps) option
            _.extend( bundleConfig, watchify.args, {debug : true} );
            // A watchify require/external bug that prevents proper recompiling, so (for now) we'll ignore these
            // options during development. Running `gulp browserify` directly will properly require and externalize.
            bundleConfig = _.omit( bundleConfig, ['external', 'require'] );
        }

        var b = browserify( bundleConfig );

        var bundle = function () {
            // Log when bundling starts
            bundleLogger.start( bundleConfig.outputName );

            return b.bundle()
                .on( 'error', handleErrors )
                .pipe( source( bundleConfig.outputName ) )
                .pipe( buffer() )
                .pipe( gulpif( devMode, sourcemaps.init() ) )
                .pipe( uglify() )
                .pipe( gulpif( devMode, sourcemaps.write() ) )
                .pipe( gulp.dest( bundleConfig.dest ) );
        };

        if ( devMode ) {
            b = watchify( b );
            b.on( 'update', bundle );
            bundleLogger.watch( bundleConfig.outputName );
        }
        else {
            if ( bundleConfig.require ) {
                b.require( bundleConfig.require );
            }

            if ( bundleConfig.external ) {
                b.external( bundleConfig.external );
            }
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
