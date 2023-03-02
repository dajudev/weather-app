//ARCHIVO DE CONFIGURACIÓN DE WEBPACK
const path = require('path');
//PLUGIN PARA PROCESAMIENTO DE ARCHIVOS CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//PLUGIN PARA PROCESAMIENTO DE ARCHIVOS HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin(),
    ]
}