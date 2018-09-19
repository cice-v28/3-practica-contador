const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            }
        ],
    },
    plugins: [
        new HtmlPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};