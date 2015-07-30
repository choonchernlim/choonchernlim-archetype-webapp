var gulp = require( 'gulp' );
var config = require( '../config' );

gulp.task( 'watch', ['watchify'], function () {
    gulp.watch( config.sass.src, ['sass'] );
} );