'use strict';

module.exports = function ( config ) {
    config.set( {
        basePath         : '',
        frameworks       : ['browserify', 'jasmine-jquery', 'jasmine-ajax', 'jasmine'],
        files            : [
            '../../../../src/test/js/**/*.js'
        ],
        preprocessors    : {
            '../../../../src/main/webapp/resources/js/**/*.js' : ['browserify', 'coverage'],
            '../../../../src/test/**/*.js'                     : ['browserify']
        },
        browserify       : {
            debug     : true,
            transform : ['browserify-istanbul'],
            plugin    : ['proxyquireify/plugin']
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
            dir  : '../../../../target/coverage-reports/'
        },
        junitReporter    : {
            outputFile : '../../../../target/surefire-reports/TEST-karma-results.xml'
        }
    } );
};