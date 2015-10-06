var gulp = require( 'gulp' );
var config = require( '../config' );
var watch = require( 'gulp-watch' );

gulp.task( 'watch', ['sass', 'optimize-images', 'watchify', 'browser-sync'], function () {
    watch( config.sass.src, function () {
        gulp.start( 'sass' );
    } );

    watch( config.images.src, function () {
        gulp.start( 'optimize-images' );
    } );
} );