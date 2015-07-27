var browserify = require( 'browserify' );
var gulp = require( 'gulp' );
var source = require( 'vinyl-source-stream' );

var appDir = './src/main/webapp/resources/app/';
var distDir = './src/main/webapp/resources/build/';

gulp.task( 'default', function () {
    return browserify( appDir + 'main.js' )
        .bundle()
        .pipe( source( 'main.js' ) )
        .pipe( gulp.dest( distDir ) );
} );

