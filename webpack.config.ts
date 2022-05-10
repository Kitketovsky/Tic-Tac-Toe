import * as webpack from "webpack";
import * as webpackDevServer from "webpack-dev-server";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssNormalize = require("postcss-normalize");

const config: webpack.Configuration = {
    mode: "development",
    devtool: "inline-source-map",
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
            {
                test: /\.css$/i,
                use: [
                    { loader: "style-loader", options: { sourceMap: true } },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: () => [postcssNormalize],
                        },
                    },
                ],
            },
            { test: /\.tsx?$/i, use: "babel-loader", exclude: /node_modules/ },
            { test: /\.js$/i, use: "source-map-loader", enforce: "pre" },
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
