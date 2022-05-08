const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    // Loaders
    module: {
        rules: [
            { test: /\.svg$/i, use: "svg-react-loader" },
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
            { test: /\.tsx?$/i, use: "ts-loader", exclude: /node_modules/ },
            { test: /\.(png|jpg|jpeg|gif)$/i, type: "asset/resource" },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        port: 9000,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    // Info about bundles
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    // Plugins
    plugins: [
        // Создается index.html на основе того, что лежит в папке public.
        // Без него, index.html не имеет контейнера с id 'root'.
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            favicon: "./public/favicon.ico",
        }),
    ],
    // Mode
    mode: "development",
};
