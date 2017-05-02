//path对象，webpack对象
var path = require('path'),
    webpack = require('webpack');

module.exports = {
  //入口文件
  entry: './src/main.js',
  //输入配置
  output: {
    //输出到项目根目录下的dist文件夹
    path: path.resolve(__dirname, './dist'),
    //公用配置路径
    publicPath: 'dist/',
    //文件名为入口文件名
    filename: '[name].js'
  },
  module: {
    //loaders用来转换文件
    loaders: [
      //转换vue文件
      {
        test: /\.vue$/, 
        loader: 'vue-loader',
        //处理.vue单文件组件里面的sass
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!autoprefixer-loader?browsers=last 4 version!sass-loader',
            'sass': 'vue-style-loader!css-loader!autoprefixer-loader?browsers=last 4 version!sass-loader?indentedSyntax'
          }
        }
      },
      //使用babel处理js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      //使用autoprefixer处理css兼容
      { 
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 4 version'
      },
      //处理图片并加上hash防止缓存
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  //插件配置
  plugins: [
    //webpack热替换
    new webpack.HotModuleReplacementPlugin(),
    //引入jquery
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ],
  //开发服务器配置
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    hot: true,
    inline: true,
    port: 8000,
    open: true
  },
  //控制打包的文件大小
  performance: {
    hints: false
  },
  //追踪错误信息
  devtool: '#eval-source-map'
}
