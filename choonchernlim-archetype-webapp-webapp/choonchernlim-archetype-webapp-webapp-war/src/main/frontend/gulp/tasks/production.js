'use strict';

var gulp = require( 'gulp' );

gulp.task( 'production', ['sass', 'minifyImages', 'browserify'] );
