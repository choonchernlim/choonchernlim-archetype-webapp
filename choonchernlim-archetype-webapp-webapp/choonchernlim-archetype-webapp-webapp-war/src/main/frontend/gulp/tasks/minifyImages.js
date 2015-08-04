var changed = require( 'gulp-changed' );
var gulp = require( 'gulp' );
var imagemop = require( 'gulp-image-optimization' );
var config = require( '../config' ).images;
var browserSync = require( 'browser-sync' );

gulp.task( 'minifyImages', function () {
    return gulp.src( config.src )
        .pipe( changed( config.dest ) ) // Ignore unchanged files
        .pipe( imagemop() ) // Optimize
        .pipe( gulp.dest( config.dest ) )
        .pipe( browserSync.reload( {stream : true} ) );
} );