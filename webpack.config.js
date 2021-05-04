const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  devServer: {
    contentBase: './dist',
  },
  entry: ['./src/ui-kit/ui-kit.pug'],
  entry: ['./src/ui-kit/style.scss'],
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
    filename: 'ui-kit/ui-kit.html',
    chunks: ['ui-kit'],
    template: './src/ui-kit/ui-kit.pug'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "ui-kit/style.css",
      chunkFilename: "[id].css",
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/i,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true
          },
        },
      },
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/,
        exclude: [
            path.resolve(__dirname, 'src/fonts'),
         ],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/icons/",
              publicPath: '../assets/icons/',
              esModule: false,
            }
          }
        ]
      },
      {
       test: /\.(woff|woff2|eot|ttf|svg|otf)$/i,
       use: {
         loader: "url-loader",
         options: {
           limit: 50000,
           name: "assets/fonts/[name].[ext]", // Output below ./fonts
           publicPath: "../", // Take the directory into account
         },
       },
      },
    ],
  }
};
