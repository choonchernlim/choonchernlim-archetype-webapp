'use strict';

var gulp = require( 'gulp' );

gulp.task( 'production', function () {
    gulp.start( 'minifyCss', 'minifyImages', 'minifyJs' );
} );
