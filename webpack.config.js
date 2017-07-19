/**
 * Created by Cassie.Xu on 17/7/6.
 */
let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {//在配置文件里添加JSON loader
    rules: [{
      test: /\.(js|jsx)$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'app')
    }, {
      test: /\.(less|css)$/,
      use: ['style-loader', 'css-loader?modules', 'less-loader']
    }, {
      test: /\.(png|jpg|gif|md)$/,
      use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: ['url-loader?limit=10000&mimetype=image/svg+xml']
    }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/app/index.tmpl.html`//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          require('autoprefixer')
        ]
      }
    }),
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ],

  devServer: {
    port: 8081,
    contentBase: './build',//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  }
};