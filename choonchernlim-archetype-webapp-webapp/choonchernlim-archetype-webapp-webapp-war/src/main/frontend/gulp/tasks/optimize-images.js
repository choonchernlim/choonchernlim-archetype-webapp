var changed = require( 'gulp-changed' );
var gulp = require( 'gulp' );
var imageop = require( 'gulp-image-optimization' );
var config = require( '../config' ).images;

gulp.task( 'optimize-images', function () {
    return gulp.src( config.src )
        .pipe( changed( config.dest ) ) // Ignore unchanged files
        .pipe( imageop() ) // Optimize
        .pipe( gulp.dest( config.dest ) );
} );