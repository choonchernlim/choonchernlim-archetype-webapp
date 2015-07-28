var browserify = require( 'browserify' );
var gulp = require( 'gulp' );
var source = require( 'vinyl-source-stream' );

var appDir = './src/main/webapp/resources/app/';
var distDir = './src/main/webapp/resources/build/';

var browserifyTask = function () {
    return browserify( appDir + 'main.js' )
        .bundle()
        .pipe( source( 'main.js' ) )
        .pipe( gulp.dest( distDir ) );
};

gulp.task( 'browserify', function () {
    return browserifyTask();
} );

module.exports = browserifyTask;