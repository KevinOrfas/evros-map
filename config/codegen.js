const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.gen.\js$/,
        exclude: /(node_modules|bower_components)/,
        use: ["codegen-loader"],
      },
    ],
  },
  resolveLoader: {
    alias: { "codegen-loader": path.resolve(__dirname, "../codegen-loader") },
  },
};
