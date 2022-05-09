import * as webpack from "webpack";
import * as webpackDevServer from "webpack-dev-server";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config: webpack.Configuration = {
    mode: "development",
    devtool: "source-map",
    entry: {
        index: "./src/index.tsx",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash:8].js",
        assetModuleFilename: "[name].[contenthash:8].[ext]",
        clean: true,
    },
    devServer: {
        port: 9000,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            { test: /\.svg$/i, use: "svg-react-loader" },
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
            { test: /\.tsx?$/i, use: "ts-loader", exclude: /node_modules/ },
            { test: /\.(png|jpg|jpeg|gif)$/i, type: "asset/resource" },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            favicon: "./public/favicon.ico",
            title: "Tic Tac Toe",
        }),
    ],
    optimization: {
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
};

export default config;
