const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const APP_DIR = path.join(__dirname, 'src')
const PUBLIC_DIR = path.join(__dirname, 'public')

const resolve = {
  alias: {
    images: `${PUBLIC_DIR}/img`,
    '@': APP_DIR
  },
  extensions: ['.js', '.jsx']
}

const devServer = {
  open: true
}

const plugins = [
  new HtmlWebPackPlugin({
    template: `${APP_DIR}/index.html`,
    favicon: `${APP_DIR}/img/favicon.png`
  }),
  new CleanWebpackPlugin()
]

const config = {
  resolve,
  devServer,
  plugins,
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        include: [`${APP_DIR}/scss`],
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
