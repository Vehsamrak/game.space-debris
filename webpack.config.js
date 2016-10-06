module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname,
        filename: "./web/scripts.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"}
        ]
    }
};
