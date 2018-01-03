var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//环境变量配置，dev/online
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

var getHtmlConfig = function (name, title) {
  return {
    template: './src/view/' + name + '.html',
    filename: 'view/' + name + '.html',
    title: title,
    hash: true,
    inject: 'body',
    favicon: './favicon.ico',
    chunks: ['common', name]    
  }
}

var config = {
  //入口文件
  entry: {
    'common': ['./src/page/common/index.js'],
    'index': ['./src/page/index/index.js'],
    'user-login': ['./src/page/user-login/index.js'],
    'result': ['./src/page/result/index.js'],
    'user-register': ['./src/page/user-register/index.js']
  },
  output: {
    path: __dirname + '/dist',
    // 调试时打开
    publicPath: WEBPACK_ENV ===  'dev'? '/dist/' : '//s.happymall.com/mmall-fe/dist/',
    filename: 'js/[name].js'
  },
  externals: {
    'jQuery': "window.jQuery"
  },
  resolve: {
    alias: {
      node_modules: __dirname + '/node_modules',
      util: __dirname + '/src/util',
      page: __dirname + '/src/page',
      service: __dirname + '/src/service',
      image: __dirname + '/src/image'
    }
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
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        },
        exclude: /node_modules/,
        include: /src/
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
      },
      {
        test: /\.string$/,
        use: "html-loader"
      },
      {
        test: /\.(eot|ttf|woff|woff2)\w*/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 1000,
              name: 'assets/[name]-[hash:5].[ext]'
            }
          }
        ]
      },
      {
        test: /\.tpl$/,
        use: [
          {
            loader: 'ejs-loader'
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
    new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
    new HtmlWebpackPlugin(getHtmlConfig('user-login', '用户登录')),
    new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果')),
    new HtmlWebpackPlugin(getHtmlConfig('user-register', '用户注册'))
  ]
};

module.exports = config;
