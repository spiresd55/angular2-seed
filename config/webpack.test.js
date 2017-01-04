var helpers = require('./helpers');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        postLoaders: [
            // instrument only testing sources with Istanbul
            {
                test: /\.(js|ts)$/,
                include: path.resolve('src'),
                loader: 'istanbul-instrumenter',
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ]
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
                loader: 'null'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: 'null'
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            }
        ]
    }
}