var gulp = require( 'gulp' );
var config = require( '../config' ).production;
var minifyCSS = require( 'gulp-minify-css' );
var size = require( 'gulp-filesize' );

gulp.task( 'minifyCss', ['sass'], function () {
    return gulp.src( config.cssSrc )
        // remove comments
        .pipe( minifyCSS( {keepSpecialComments : 0} ) )
        .pipe( gulp.dest( config.cssDest ) )
        .pipe( size() );
} );