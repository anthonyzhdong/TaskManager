const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    mode: 'development',
    target: 'web',
    devTool: 'cheaper-module-source-map',
    entry: './public/index',
    output: {
        path: path.resolve(__dirname,"build"),
        publicPath:'/',
        filename: "bundle.js"
    },
    stats:"minimal",
    devServer: {
        historyApiFallback: true,
        headers: {"Access-Control-Allow-Origin": "*"},
        https: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            favicon: "public/favicon.ico"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /(\.css)$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }

}