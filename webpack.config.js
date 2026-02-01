const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const babelLoader = require('./config/babel-loader');

module.exports = (env) => {
  const isDevelopement = env === 'development' || (env && env.development);
  console.log(`This is ${isDevelopement ? 'development' : 'production'} build`);

  const commonConfig = {
    entry: './src/app.js',
    mode: isDevelopement ? 'development' : 'production',
    devtool: isDevelopement ? 'inline-cheap-source-map' : false,
    output: {
      filename: isDevelopement ? 'bundle.js' : 'bundle-[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      assetModuleFilename: '[name][ext]',
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'html-loader',
        },
        {
          test: /\.(png|jpg)$/,
          exclude: /node_modules/,
          include: /src\/images/,
          type: 'asset/resource',
          generator: {
            filename: 'images/wastes/[name][ext]',
          },
        },
        {
          test: /\.(png|jpg)$/,
          exclude: /node_modules/,
          include: /src\/libs\/images/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          type: 'asset/resource',
          generator: {
            filename: 'icons/[name][ext]',
          },
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
  };

  const devConfig = {
    devServer: {
      static: {
        directory: path.resolve(__dirname, './'),
        watch: false,
      },
      hot: true,
      host: '0.0.0.0',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  };

  const prodConfig = {
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].css',
        ignoreOrder: false,
      }),
    ],
    optimization: {
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
  };

  if (isDevelopement) {
    return merge(commonConfig, devConfig);
  }
  return merge(commonConfig, prodConfig, babelLoader);
};
