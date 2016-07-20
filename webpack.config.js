var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("development") // development production
            }
        }),
        new HtmlwebpackPlugin({
            title: 'react-redux-demo',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ],
    devServer: {
        inline: true,
        port: 7777
    },
};
