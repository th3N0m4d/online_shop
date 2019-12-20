const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const APP_DIR = path.join(__dirname, 'src')
const DIST_DIR = path.join(__dirname, 'dist')

const config = {
    entry: {
        app: `${APP_DIR}/index.jsx`
    },
    output: {
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },    
        }    
    },
    devServer: {
        contentBase: DIST_DIR,
        port: 8080,
        open: true
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Online shop',
            template: `${APP_DIR}/index.html`
        }),
        new CleanWebpackPlugin()
    ],
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