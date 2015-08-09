var gulp = require( 'gulp' );
var config = require( '../config' ).production;
var minifyCSS = require( 'gulp-minify-css' );
var size = require( 'gulp-filesize' );
var rename = require( 'gulp-rename' );

// TODO delete???
gulp.task( 'minifyCss111', ['sass'], function () {
    return gulp.src( config.cssSrc )
        // remove comments
        .pipe( minifyCSS( {keepSpecialComments : 0} ) )
        .pipe( rename( {
            suffix : '.min'
        } ) )
        .pipe( gulp.dest( config.cssDest ) )
        .pipe( size() );
} );