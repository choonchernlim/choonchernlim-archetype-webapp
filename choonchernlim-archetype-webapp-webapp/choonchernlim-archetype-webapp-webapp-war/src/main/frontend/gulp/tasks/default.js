/**
 * Gulp's default task that runs a list of tasks.
 */

'use strict';

var gulp = require( 'gulp' );

gulp.task( 'default', ['sass', 'optimize-images', 'browserify'] );
