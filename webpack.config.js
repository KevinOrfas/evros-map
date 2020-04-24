const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const babelLoader = require('./config/babel-loader');
// const codeGenConfig = require("./codegen-loader");

module.exports = (env) => {
  const isDevelopement = env === 'development';
  console.log(`This is ${isDevelopement ? 'development' : 'production'} build`);

  const baseConfig = {
    entry: './src/app.js',
    mode: 'production',
    output: {
      filename: isDevelopement ? 'bundle.js' : 'bundle-[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      // publicPath: '/public/',
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
        // {
        //   test: /\.svg$/,
        //   exclude: /node_modules/,
        //   loader: 'svg-inline-loader',
        // },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'html-loader',
        },
        {
          test: /\.(png|jpg|gif)$/,
          exclude: /node_modules/,
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
    plugins: [
      new CleanWebpackPlugin({}),
      new webpack.DefinePlugin({
        ENV_IS_DEVELOPMENT: isDevelopement,
        ENV_IS: JSON.stringify(env),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
      // new CopyPlugin([
      //   {
      //     from: path.resolve(__dirname, 'src/icons'),
      //     to: path.resolve(__dirname, 'dist/icons'),
      //   },
      //   {
      //     from: path.resolve(__dirname, 'src/libs'),
      //     to: path.resolve(__dirname, 'dist/libs'),
      //   },
      // ]),
    ],
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
    devtool: 'none',
  };

  const devConfig = {
    mode: 'development',
    devServer: {
      contentBase: path.resolve(__dirname, './'),
      watchContentBase: false,
      hotOnly: true,
      overlay: false,
      host: '0.0.0.0',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: 'source-map',
  };

  if (isDevelopement) {
    return merge(baseConfig, devConfig);
  }
  return merge(baseConfig, babelLoader);
};
