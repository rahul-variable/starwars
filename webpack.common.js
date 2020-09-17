const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');
const outputDirectory = 'dist';

module.exports = (env) => {
  const basePath = './config/.env';
  const commonEnv = dotenv.config({ path: basePath }).parsed;
  const envPath = basePath + '.' + env.NODE_ENV;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  const finalEnv = Object.assign({}, commonEnv, fileEnv);
  const envKeys = Object.keys(finalEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(finalEnv[next]);
    return prev;
  }, {});

  return {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: path.join(__dirname, outputDirectory),
      filename: 'starwars.[contenthash].js',
      publicPath: `${finalEnv.PUBLIC_PATH}${finalEnv.CONTEXT_URL}`,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          loader: 'url-loader?limit=100000',
        },
      ],
    },
    resolve: {
      alias: {
        app: path.resolve(__dirname, 'src/'),
      },
    },
    plugins: [
      new CleanWebpackPlugin([outputDirectory]),
      new HtmlWebpackPlugin({
        hash: true,
        template: './public/index.html',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};
