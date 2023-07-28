const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/tetris.js", to: "tetris.js" },
        { from: "src/tetris.wasm", to: "tetris.wasm" },
      ],
    }),
  ],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.mp3$/,
        use: "file-loader",
      },
    ],
  },
  //Webpack 5 no longer automates polyfills
  resolve: {
    fallback: {
      fs: false,
      path: false,
      crypto: false,
    },
  },
  mode: "development",
}
