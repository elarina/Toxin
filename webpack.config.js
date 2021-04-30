const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  devServer: {
    contentBase: './dist',
  },
  entry: {
    'index': './src/ui-kit/ui-kit.pug',
  },
  entry: ['./src/ui-kit/style.scss'],
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, 'dist/ui-kit'),
  },
  plugins: [
    new HtmlWebpackPlugin({
    filename: 'ui-kit.html',
    chunks: ['ui-kit'],
    template: './src/ui-kit/ui-kit.pug'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "style.css",
      chunkFilename: "[id].css",
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/i,
        use: {
          loader: 'pug-loader',
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
    ],
  }
};
