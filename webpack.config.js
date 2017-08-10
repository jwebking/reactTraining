var path = require('path');//included in node, just have to require, not download
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',//grab the files linked to this
    output: {
        path: path.resolve(__dirname, 'dist'),//dirname resolves to specific directory
        filename: 'index_bundle.js'//going to bundle all files into the bundle file
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader' },
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        template: 'app/index.html'
    })]
}

