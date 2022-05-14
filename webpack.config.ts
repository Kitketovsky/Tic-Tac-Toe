import * as webpack from "webpack";
import * as webpackDevServer from "webpack-dev-server";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssNormalize = require("postcss-normalize");
const DashboardPlugin = require("webpack-dashboard/plugin");
// const UnusedWebpackPlugin = require("unused-webpack-plugin");

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
        // alias: {
        //     react: path.resolve(
        //         __dirname,
        //         "node_modules/react/cjs/react.production.min.js"
        //     ),
        // },
    },
    module: {
        // noParse: [
        //     new RegExp(
        //         path.resolve(
        //             __dirname,
        //             "node_modules/react/cjs/react.production.min.js"
        //         )
        //     ),
        // ],
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
        new DashboardPlugin(),
        // new UnusedWebpackPlugin({
        //     directories: [path.join(__dirname, "src")],
        //     exclude: ["*.test.js"],
        //     root: __dirname,
        // }),
    ],
    recordsPath: path.join(__dirname, "records.json"),
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
    stats: {
        reasons: true,
    },
    performance: {
        hints: "warning",
        maxEntrypointSize: 10000000,
        maxAssetSize: 10000000,
    },
};

export default config;
