const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/app.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    // publicPath: path.resolve(__dirname, "images"),
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./"),

    watchContentBase: false,
    hotOnly: true,
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.tsx?$/,
  //       use: "ts-loader",
  //       exclude: /node_modules/,
  //     },
  //     {
  //       test: /\.(png|svg|jpg|gif)$/,
  //       use: ["file-loader"],
  //     },
  //   ],
  // },
  // resolve: {
  //   extensions: [".tsx", ".ts", ".js"],
  // },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new CopyPlugin([
    //   {
    //     from: path.resolve(__dirname, "images"),
    //     to: path.resolve(__dirname, "dist"),
    //   },
    // ]),
  ],
  devtool: "source-map",
};
