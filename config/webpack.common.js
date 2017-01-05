var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    tslint: {
        failOnHint: true,
        emitErrors: true,
        configuration: {
            rules: {
                'no-empty-interface': true,
                curly: true,
                'no-duplicate-variable': true,
                'no-unused-variable': true,
                'no-use-before-declare': true,
                'no-var-keyword': true,
                'triple-equals': true,
                'eofline': true,
                'max-line-length': 100,
                'no-trailing-whitespace': true,
                'trailing-comma': 'never',
                'arrow-parens': true,
                'class-name': true,
                'no-consecutive-blank-lines': true,
                'quotemark': 'single',
                'semicolon': true,
                "whitespace": [
                    true,
                    "check-branch",
                    "check-operator",
                    "check-typecast",
                    "check-decl",
                    "check-module",
                    "check-seperator",
                    "check-type"
                ]
            }
        }
    },
    
    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.scss$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!resolve-url!sass?sourceMap')
            },
            {
                test: /\.scss$/,
                include: helpers.root('src', 'app'),
                loaders: ['exports-loader?module.exports.toString()', 'css', 'sass']
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};