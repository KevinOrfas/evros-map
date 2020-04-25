const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const babelLoader = require('./config/babel-loader');

module.exports = (env) => {
  const isDevelopement = env === 'development';
  console.log(`This is ${isDevelopement ? 'development' : 'production'} build`);

  const commonConfig = {
    entry: './src/app.js',
    mode: env,
    devtool: isDevelopement ? 'inline-cheap-source-map' : 'none',
    output: {
      filename: isDevelopement ? 'bundle.js' : 'bundle-[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'html-loader',
        },
        {
          test: /\.(png|jpg)$/,
          exclude: /node_modules/,
          include: /src\/images/,
          use: {
            loader: 'file-loader',
            options: { name: '[name].[ext]', outputPath: 'images/wastes' },
          },
        },
        {
          test: /\.(png|jpg)$/,
          exclude: /node_modules/,
          include: /src\/libs\/images/,
          use: {
            loader: 'file-loader',
            options: { name: '[name].[ext]', outputPath: 'images' },
          },
        },
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            options: { name: '[name].[ext]', outputPath: 'icons' },
          },
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
  };

  const devConfig = {
    devServer: {
      contentBase: path.resolve(__dirname, './'),
      watchContentBase: false,
      hotOnly: true,
      overlay: false,
      host: '0.0.0.0',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  };

  const prodConfig = {
    plugins: [
      new CleanWebpackPlugin({}),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
    ],
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
  };

  if (isDevelopement) {
    return merge(commonConfig, devConfig);
  }
  return merge(commonConfig, prodConfig, babelLoader);
};
