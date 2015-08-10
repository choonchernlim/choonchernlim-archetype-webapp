'use strict';

var baseConfig = require( '../../../src/main/frontend/gulp/config' );

module.exports = function ( config ) {
    config.set( {
        basePath         : '../../../',
        frameworks       : ['browserify', 'jasmine-jquery', 'jasmine-ajax', 'jasmine'],
        files            : [
            'src/test/js/**/*.js'
        ],
        preprocessors    : {
            'src/test/js/**/*.js' : ['browserify']
        },
        browserify       : {
            debug     : true,
            transform : ['./src/main/frontend/node_modules/browserify-istanbul'],
            plugin    : ['./src/main/frontend/node_modules/proxyquireify/plugin'],
            paths     : ['src/main/frontend/node_modules', 'src/main/frontend/src/js'],
            configure : function ( bundle ) {
                bundle.on( 'prebundle', function () {
                    bundle.require( baseConfig.browserify.externalLibs );
                } );
            }
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
            reporters : [
                {
                    type : "cobertura",
                    dir  : 'target/coverage-reports/'
                },
                {
                    type : "html",
                    dir  : 'target/coverage-reports/'
                }
            ]
        },
        junitReporter    : {
            outputDir  : 'target/surefire-reports/',
            outputFile : 'TEST-karma-results.xml'
        }
    } );
};