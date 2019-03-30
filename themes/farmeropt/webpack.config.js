'use strict';

// Зависимости
const webpack = require("webpack");
const path = require('path');

// Webpack plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// Настройка для SVGO-loader
let svgoConfig = JSON.stringify({
  plugins: [{
      removeTitle: true
  }, {
      removeUselessStrokeAndFill: true
  }, {
      removeAttrs: {
          attrs: '(stroke|fill)'
      },
  }, {
      convertColors: {
          shorthex: false
      }
  }, {
      convertPathData: true
  }]
});


module.exports = {
  context: path.join(__dirname, "src"),

  entry: {
    commons: './commons'
  },

  output: {
    path: path.join(__dirname, "source", "assets"),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      { // Javascript
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { // SCSS
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      { // Картинки 
        test: /\.(png|jpg|svg|gif)$/,
        exclude: path.join(__dirname, "src", "icons"),
        use: 'file-loader?name=images/[name].[ext]'
      },
      { // SVG-спрайт
        test: /\.svg$/,
        include: path.join(__dirname, "src", "icons"),
        use: [

            {
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: 'icons/icons-sprite.svg'
                }

            }, {
                loader: 'svgo-loader?' + svgoConfig
            }
        ]
    },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    new SpriteLoaderPlugin()
  ],
}