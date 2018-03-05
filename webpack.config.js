const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const sourcePath = path.join(__dirname, 'src');
const distPath = path.join(__dirname, 'dist');

module.exports = {
    name: 'client',

    entry: [
        'babel-polyfill',
        './src/index.js'
    ],

    output: {
        path: distPath,
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    devServer: {
        hot: true,
        port: 3000,
        open: true,
        contentBase: distPath,
        publicPath: '/',
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css', '.scss']
    },

    plugins: [
        new CleanWebpackPlugin([distPath]),
        new HtmlWebpackPlugin({
            title: 'test app',
            template: path.join(sourcePath, 'index.html')
        }),
        // new ExtractTextPlugin('styles.css'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['env', 'react', 'stage-2'],
                      plugins: [ require('babel-plugin-transform-runtime') ]
                  }
              }
          },
          {
              test: /\.(css|scss)$/,
              // use: ExtractTextPlugin.extract({
              //     use: ['css-loader', 'sass-loader'],
              //     fallback: 'style-loader'
              // })
              use: [{
                  loader: 'style-loader'
              }, {
                  loader: 'css-loader'
              }, {
                  loader: 'sass-loader'
              }
              ]
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: ['url-loader']
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: ['url-loader']
          }
      ]
    }
};