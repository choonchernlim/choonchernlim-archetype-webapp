var browserSync = require( 'browser-sync' ).create();
var gulp = require( 'gulp' );
var config = require( '../config' ).browserSync;

gulp.task( 'browser-sync', function () {
    browserSync.init( config );
} );