'use strict';

module.exports = function ( config ) {
    config.set( {
        basePath         : '../../../',
        frameworks       : ['browserify', 'jasmine-jquery', 'jasmine-ajax', 'jasmine'],
        files            : [
            'src/test/js/**/*.js'
        ],
        preprocessors    : {
            'src/main/webapp/resources/dist/**/*.js' : ['browserify', 'coverage'],
            'src/test/**/*.js'                       : ['browserify']
        },
        browserify       : {
            debug     : true,
            transform : ['./src/main/frontend/node_modules/browserify-istanbul'],
            plugin    : ['./src/main/frontend/node_modules/proxyquireify/plugin']
        },
        reporters        : ['progress', 'junit', 'coverage'],
        browsers         : ['PhantomJS'],
        plugins          : [
            'browserify-istanbul',
            'proxyquireify',
            'karma-browserify',
            'karma-jasmine',
            'karma-jasmine-jquery',
            'karma-jasmine-ajax',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-coverage'
        ],
        coverageReporter : {
            type : 'cobertura',
            dir  : 'target/coverage-reports/'
        },
        junitReporter    : {
            outputDir  : 'target/surefire-reports/',
            outputFile : 'TEST-karma-results.xml'
        }
    } );
};