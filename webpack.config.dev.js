var webpack = require('webpack');
var path = require('path');

var DIST = path.resolve(__dirname, 'dist');
var APP = path.resolve(__dirname, 'src')

module.exports = [{
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        'webpack-hot-middleware/client?reload=true',
        APP + '/index.jsx'
    ],
    target: 'web',
    output: {
        path: DIST,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: APP
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.jsx?$/, include: APP, loaders: ['babel-loader']},
            {test: /(\.css)$/, loaders: ['style', 'css']}
        ]
    }
}];