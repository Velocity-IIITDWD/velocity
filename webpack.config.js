const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.[fullhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/api',
          to: 'api',
        },
        {
          from: 'src/images',
          to: 'images',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src'),
        use: ['html-loader'],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },

  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
  },
}
