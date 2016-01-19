'use strict';

module.exports = function ( config ) {
    config.set( {
        basePath         : '../../../',
        frameworks       : ['browserify', 'jasmine-jquery', 'jasmine-ajax', 'jasmine'],
        files            : ['src/test/js/**/*.js'],
        preprocessors    : { 'src/test/js/**/*.js' : ['browserify'] },
        browserify       : {
            debug     : true,
            transform : [
                ['babelify', { 'presets' : ['./babel-preset-es2015', './babel-preset-react'] }],

                // Hack to fix "Cannot read property 'text' of undefined".
                // See https://github.com/karma-runner/karma-coverage/issues/157
                ['browserify-istanbul', { instrumenterConfig : { embedSource : true } }]
            ],
            paths     : ['src/main/frontend/node_modules']
        },
        reporters        : ['progress', 'junit', 'coverage'],
        browsers         : ['PhantomJS'],
        coverageReporter : {
            reporters : [
                { type : "cobertura", dir : 'target/coverage-reports/' },
                { type : "html", dir : 'target/coverage-reports/' }
            ]
        },
        junitReporter    : {
            outputDir  : 'target/surefire-reports/',
            outputFile : 'TEST-karma-results.xml'
        }
    } );
};