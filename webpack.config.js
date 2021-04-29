const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devServer: {
    contentBase: './dist',
  },
  entry: {
    'index': './src/ui-kit/index.pug',
  },
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
    filename: 'index.html',
    chunks: ['index'],
    template: './src/ui-kit/index.pug'
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
