const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devServer: {
    contentBase: './dist',
  },
  entry: {
    'index': './src/ui-kit/ui-kit.pug',
  },
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, 'dist/ui-kit'),
  },
  plugins: [
    new HtmlWebpackPlugin({
    filename: 'ui-kit.html',
    chunks: ['ui-kit'],
    template: './src/ui-kit/ui-kit.pug'
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
    ],
  }
};
