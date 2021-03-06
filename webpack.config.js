const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    devServer: {
        static: {
            directory: path.join(__dirname,"dist"),
        },
        historyApiFallback: true,
        compress: true,
        port: 9000,
    },
    module:{
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            }
        ]
    }
}