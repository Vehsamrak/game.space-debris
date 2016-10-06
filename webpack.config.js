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
    resolve: {
        extensions: ['', '.webpack.js', '.css', '.less', '.web.js', '.ts', '.tsx', '.js']
    },
    plugins: [
        new ExtractTextPlugin("./web/css/styles.css")
    ]
};
