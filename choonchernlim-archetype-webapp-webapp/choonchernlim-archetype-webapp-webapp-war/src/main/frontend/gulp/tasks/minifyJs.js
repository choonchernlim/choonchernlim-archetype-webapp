var gulp = require( 'gulp' );
var config = require( '../config' ).production;
var size = require( 'gulp-filesize' );
var uglify = require( 'gulp-uglify' );
var rename = require( 'gulp-rename' );

// TODO delete this??
gulp.task( 'minifyJs11111', ['browserify'], function () {
    return gulp.src( config.jsSrc )
        .pipe( uglify() )
        .pipe( rename( {
            suffix : '.min'
        } ) )
        .pipe( gulp.dest( config.jsDest ) )
        .pipe( size() );
} );