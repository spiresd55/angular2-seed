var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        //Files loaded and excluded from test environment
        files: [
            {pattern: './config/karma-test-shim.js', watched: false}
        ],

        //Runs the preprocessors on all the files
        preprocessors: {
            './config/karma-test-shim.js': ['coverage', 'webpack', 'sourcemap']
        },

        //Loads webpack configuration for testing purposes
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

        // Will be a coverage report before transpilation happened to the typescript file
        remapCoverageReporter: {
            'text-summary': null, // to show summary in console
            html: './coverage/html',
            json: './coverage/coverage-final.json',
            cobertura: './coverage/cobertura.xml'
        },

        //Enforces 100% code coverage, will throw an error if coverage is not met
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