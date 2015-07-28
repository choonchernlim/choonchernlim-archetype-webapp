/**
 * Gulp's default task that runs a list of tasks.
 *
 * @type {Gulp|exports|module.exports}
 */

var gulp = require( 'gulp' );

gulp.task( 'default', function () {
    gulp.start( 'browserify' );
} );
