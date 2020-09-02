const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
      filename: "./app.bundle.js"
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
              },
              { test: /\.css$/, loader: "style-loader!css-loader" }
          ]
    }
  }