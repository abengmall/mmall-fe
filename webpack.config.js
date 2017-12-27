var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var getHtmlConfig = function (name) {
  return {
    template: './src/view/' + name + '.html',
    filename: 'view/' + name + '.html',
    hash: true,
    inject: 'body',
    chunks: ['common', name]    
  }
}

module.exports = {
  //入口文件
  entry: {
    common: ['./src/page/common/index.js'],
    index: ['./src/page/index/index.js'],
    login: ['./src/page/login/index.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js'
  },
  externals: {
    'jQuery': "window.jQuery"
  },
  resolve: {
    alias: {
      /*node_modules: __dirname + '/node_modules',*/
      util: __dirname + '/src/util',
      page: __dirname + '/src/page',
      service: __dirname + '/src/service',
      image: __dirname + '/src/image'
    }
  },
  devServer: {
    contentBase: './dist/view',
    historyApiFallback: true,
    inline: true,
    port: 8080,
    noInfo : true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'assets/[name]-[hash:5].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 提取公共chuck的name
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/base.js'
    }),
    // 单独打包css文件
    new ExtractTextPlugin("css/[name].css"),
    new HtmlWebpackPlugin(getHtmlConfig('index')),
    new HtmlWebpackPlugin(getHtmlConfig('login')),
  ]
}