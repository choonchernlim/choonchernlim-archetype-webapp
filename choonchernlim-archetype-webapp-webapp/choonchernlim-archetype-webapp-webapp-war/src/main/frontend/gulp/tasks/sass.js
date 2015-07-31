var gulp = require( 'gulp' );
var browserSync = require( 'browser-sync' );
var sass = require( 'gulp-sass' );
var handleErrors = require( '../util/handleErrors' );
var config = require( '../config' ).sass;
var autoprefixer = require( 'gulp-autoprefixer' );

gulp.task( 'sass', function () {
    return gulp.src( config.src )
        .pipe( sass( config.settings ) )
        .on( 'error', handleErrors )
        .pipe( autoprefixer( {browsers : ['last 2 version']} ) )
        .pipe( gulp.dest( config.dest ) )
        .pipe( browserSync.reload( {stream : true} ) );
} );