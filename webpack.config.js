const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    // Loaders
    module: {
        rules: [
            {test: /\.svg$/, use: 'svg-inline-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/}
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    // Info about bundles
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    // Plugins
    plugins: [
        // Создается index.html на основе того, что лежит в папке public.
        // Без него, index.html не имеет контейнера с id 'root'.
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            favicon: './public/favicon.ico'
        })
    ],
    // Mode
    mode: 'development'
}