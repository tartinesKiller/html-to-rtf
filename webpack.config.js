const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

var config = {
    output: {
        path: path.resolve(path.join(__dirname, "/dist/")),
    },
    resolve: {
        extensions: ["*", ".js"],
        modules: [path.join(__dirname, "src"), "node_modules"], // add a directory search src/* over node_modules/
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: __dirname,
                exclude: /node_modules/,
            },
        ],
    },
    externals: {
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, "node_modules")
                    ) === 0
                )
            }
        }),
    ],
};

module.exports = [
    merge(config, {
        entry: path.resolve(path.join(__dirname, "index.js")),
        output: {
            filename: "[name].js",
            libraryTarget: "window",
            library: "html-to-rtf",
        },
    }),
];
