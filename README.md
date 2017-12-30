# mmall-fe

# 
使用下面这段代码使用的是Edge 。模式Edge 模式告诉 IE 以最高级模式渲染文档，也就是任何 IE 版本都以当前版本所支持的最高级标准模式渲染，避免版本升级造成的影响。简单的说，就是什么版本 IE 就用什么版本的标准模式渲染。

<meta http-equiv="X-UA-Compatible" content="IE=edge">

# 解决html文件更改 不能刷新的问题
参考： http://coding.imooc.com/learn/questiondetail/6266.html
1 webpack.config.json文件的 output对象配置
 publicPath: '/dist' 
2 package.json配置script：
 "server": "webpack-dev-server --inline --port 8080"
3 删掉webpack.config.json的配置
/*  devServer: {
    contentBase: './dist/view',
    historyApiFallback: true,
    inline: true,
    port: 8080,
    noInfo : true
  },*/

# 解决bash命令行ctrl+c不能杀死node进程的问题（2个进程 ctrl+c只能杀死一个进程，导致再次启动dev-server的时候无法开启服务）
解决方法 用系统自带的命令行工具 ctrl+c即可停止node进程

# webpack中配置font-awesome (此方法可以兼容ie8)
  1 安装依赖
  npm install font-awesome --save
  2 在js文件中引用
  require('node_modules/font-awesome/css/font-awesome.min.css') // 需要在webpack.config.js中配置别名
  如下：
  resolve: {
    alias: {
      node_modules: __dirname + '/node_modules',
      util: __dirname + '/src/util',
      page: __dirname + '/src/page',
      service: __dirname + '/src/service',
      image: __dirname + '/src/image'
    }
  }
  3 在webpack.config.js中添加对字体文件的处理loader 用file-loader即可 
      {
        test: /\.(eot|ttf|woff|woff2)\w*/,
        loader: 'file-loader'
      }