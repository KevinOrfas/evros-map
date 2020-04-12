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
      new webpack.DefinePlugin({
        ENV_IS_DEVELOPMENT: isDevelopement,
        ENV_IS: JSON.stringify(env),
        // PRODUCTION: JSON.stringify(true),
        // VERSION: JSON.stringify("5fa3b9"),
        // BROWSER_SUPPORTS_HTML5: true,
        // TWO: "1+1",
        // "typeof window": JSON.stringify("object"),
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
      // new CopyPlugin([
      //   {
      //     from: path.resolve(__dirname, "images"),
      //     to: path.resolve(__dirname, "dist"),
      //   },
      // ]),
    ],
    devtool: "source-map",
  };

  const devConfig = {
    mode: "development",
    devServer: {
      contentBase: path.resolve(__dirname, "./"),
      publicPath: "/dist/",
      watchContentBase: false,
      hotOnly: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  };

  if (isDevelopement) {
    return merge(baseConfig, devConfig);
  }
  return baseConfig;
};
