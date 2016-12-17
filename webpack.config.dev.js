var webpack = require('webpack');
var path = require('path');

var DIST = path.resolve(__dirname, 'dist');
var APP = path.resolve(__dirname, 'src')

module.exports = [{
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        'whatwg-fetch',
        'webpack-hot-middleware/client?reload=true',
        APP + '/index.jsx'
    ],
     resolve: {
        modulesDirectories: ["web_modules", "node_modules", "bower_components"]
     },
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
        new webpack.NoErrorsPlugin(),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ],
    module: {
        loaders: [
            {test: /\.jsx?$/, include: APP, loaders: ['babel-loader']},
            {test: /(\.css)$/, loaders: ['style', 'css']}
        ]
    }
}];