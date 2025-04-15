const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'bundle.js'
  },

  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3001,
    // contentBase: path.join(__dirname, 'public'),
    // stats: "errors-only", => webpack 5에서 없어진 듯
    // open the default web browser when the server start,
    open: true, 
    // openPage: '', => webpack 5에서 없어진 듯듯
    // 웹 브라우저 새로고침을 해도 동작하도록 하는 옵션 (서버 요청을 index.html로 하고 그 이후에 router를 태움)
    historyApiFallback: true,
    compress: true,
  },

  externals: {
    Config:  "configs", 
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            // options: {
            //   presets: [
            //     '@babel/preset-env',
            //     '@babel/preset-react'
            //   ]
            // }
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        // svg를 로딩하기 위해서는 loader를 설정해야 한다 (webpack 5에서 동작)
        use: {
          // issuer: /\.[jt]sx?$/,
          loader: '@svgr/webpack',
        }
        // use: [
        //   {
        //      loader: 'raw-loader',
        //   },
        // ],
      },
      {
        test: /\.(png|jpg)$/,
        use: [ 'file-loader' ],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  plugins: [
    // 아래 template 설정 때문에 엄청 해맸음
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],

};
