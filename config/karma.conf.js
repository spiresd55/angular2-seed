var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            {pattern: './config/karma-test-shim.js', watched: false}
        ],

        preprocessors: {
            './config/karma-test-shim.js': ['coverage', 'webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        coverageReporter: {
            type: 'in-memory'
        },

        remapCoverageReporter: {
            'text-summary': null, // to show summary in console
            html: './coverage/html',
            json: './coverage/coverage-final.json',
            cobertura: './coverage/cobertura.xml'
        },

        istanbulThresholdReporter: {
            src: './coverage/coverage-final.json',
            reporters: ['text'],

            thresholds: {
                global: {
                    statements: 100,
                    branches: 100,
                    lines: 100,
                    functions: 100
                }
            }
        },

        reporters: ['progress', 'coverage', 'remap-coverage', 'istanbul-threshold'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    };

    config.set(_config);
};