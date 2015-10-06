var browserSync = require( '../util/browser-sync-instance' );
var gulp = require( 'gulp' );
var config = require( '../config' ).browserSync;

gulp.task( 'browser-sync', function () {
    browserSync.init( config );
} );