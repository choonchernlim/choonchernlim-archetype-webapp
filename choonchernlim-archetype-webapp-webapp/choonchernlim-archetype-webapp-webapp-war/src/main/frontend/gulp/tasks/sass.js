var gulp = require( 'gulp' );
var browserSync = require( '../util/browser-sync-instance' );
var sass = require( 'gulp-sass' );
var handleErrors = require( '../util/handle-errors' );
var config = require( '../config' ).sass;
var autoprefixer = require( 'gulp-autoprefixer' );
var rename = require( 'gulp-rename' );
var minifyCSS = require( 'gulp-minify-css' );

gulp.task( 'sass', function () {
    return gulp.src( config.src )
        .pipe( sass( config.settings ) )
        .on( 'error', handleErrors )
        .pipe( autoprefixer( {browsers : ['last 2 version']} ) )
        .pipe( gulp.dest( config.dest ) )
        .pipe( minifyCSS( {keepSpecialComments : 0} ) )
        .pipe( rename( {suffix : '.min'} ) )
        .pipe( gulp.dest( config.dest ) )
        .pipe( browserSync.reload( {stream : true} ) );
} );