'use strict';

var gulp = require( 'gulp' );

gulp.task( 'production', ['minifyCss', 'minifyImages', 'minifyJs'] );
