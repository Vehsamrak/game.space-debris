var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/js/app.ts",
    output: {
        path: __dirname,
        filename: "./web/js/scripts.js"
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./web/css/styles.css")
    ],
    node: {
        fs: "empty"
    },
    externals: {
        'phaser': 'Phaser'
    }
};
