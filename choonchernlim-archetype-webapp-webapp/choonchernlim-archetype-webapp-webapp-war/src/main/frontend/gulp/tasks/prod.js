'use strict';

var gulp = require( 'gulp' );

gulp.task( 'prod', function () {
    gulp.start( 'sass', 'browserify' );
} );
