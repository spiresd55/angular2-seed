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
            /*dir: 'reports/coverage',
            check: {
                global: {
                    statements: 100,
                    branches: 100,
                    functions: 100,
                    lines: 100
                }
            },
            reporters: [
                {
                    type: 'lcov', subdir: 'report-client-lcov'
                },
                {
                    type: 'json', subdir: 'report-client-lcov'
                },
                {
                    type: 'text'
                }
            ]*/
            type: 'in-memory'
        },

//        plugins: ['karma-coverage', 'karma-remap-coverage'],

        remapCoverageReporter: {
            'text-summary': null, // to show summary in console
            html: './coverage/html',
            cobertura: './coverage/cobertura.xml'
        },

        reporters: ['progress', 'coverage', 'remap-coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    };

    config.set(_config);
};