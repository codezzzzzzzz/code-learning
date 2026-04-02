const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index.js')
const { Static } = require('vue')

module.exports = {
  mode: 'development',  // 开发模式
  entry: path.resolve(__dirname, './src/main.js'), // 入口文件
  output: { // 出口文件
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
      title: 'learn webpack'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    port: 5173,
    open: true,
    hot: true,
  }
}