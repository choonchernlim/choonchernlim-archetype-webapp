var browserify = require( 'browserify' );
var gulp = require( 'gulp' );
var source = require( 'vinyl-source-stream' );
var config = require( '../config' ).browserify;

var browserifyTask = function () {
    return browserify( config.srcDir + config.entryFile )
        .bundle()
        .pipe( source( config.entryFile ) )
        .pipe( gulp.dest( config.outputDir ) );
};

gulp.task( 'browserify', function () {
    return browserifyTask();
} );

module.exports = browserifyTask;