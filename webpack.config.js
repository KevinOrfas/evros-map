const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");

module.exports = (env) => {
  const isDevelopement = env === "development";
  console.log(`This is ${isDevelopement ? "development" : "production"} build`);

  const baseConfig = {
    entry: "./src/app.js",
    mode: "production",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/dist/",
    },

    plugins: [
      new webpack.DefinePlugin({
        ENV_IS_DEVELOPMENT: isDevelopement,
        ENV_IS: JSON.stringify(env),
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
    ],
  };

  const devConfig = {
    mode: "development",
    devServer: {
      contentBase: path.resolve(__dirname, "./"),
      publicPath: "/dist/",
      watchContentBase: false,
      hotOnly: true,
      overlay: true,
      host: "0.0.0.0",
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      // new CopyPlugin([
      //   {
      //     from: path.resolve(__dirname, "images"),
      //     to: path.resolve(__dirname, "dist"),
      //   },
      // ]),
    ],
    devtool: "source-map",
  };

  if (isDevelopement) {
    return merge(baseConfig, require("./babel-loader"), devConfig);
  }
  return merge(baseConfig, require("./babel-loader"));
};
