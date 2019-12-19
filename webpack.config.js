const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const APP_DIR = path.join(__dirname, 'src')

const config = {
    entry: `${APP_DIR}/App.jsx`,
    output: {
        filename: 'app.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Online shop',
            template: `${APP_DIR}/index.html`
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
      },
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
                test: /\.(jpe?g|png|svg)$/,
                use: 'file-loader'
            }
        ]
    }
}

module.exports = config