import * as webpack from "webpack";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssNormalize = require("postcss-normalize");

const config: webpack.Configuration = {
    mode: "production",
    devtool: "source-map",
    entry: {
        index: "./src/index.tsx",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash:8].js",
        assetModuleFilename: "[name].[contenthash:8].[ext]",
        clean: true,
        pathinfo: false,
    },
    resolve: {
        symlinks: false,
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            { test: /\.svg$/i, use: "svg-react-loader" },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
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
            { test: /\.(png|jpg|jpeg|gif)$/i, type: "asset/resource" },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            favicon: "./public/favicon.ico",
            manifest: "./public/manifest.json",
        }),
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
};

export default config;
