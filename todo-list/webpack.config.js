const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack-base')

const isDev = process.env.NODE_ENV === 'development'

let config = webpackMerge(baseConfig, {
    entry: {
        app: path.join(__dirname, './index.js')
    },
    output: {
        filename: '[name][hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html')
        })
    ]
})

if (isDev) {
    config.devtool = '#cheap-module-eval-map'
    config.entry = {
        app: [
            'react-hot-loader/patch',
            'whatwg-fetch',
            config.entry.app
        ]
    }
    config.devServer = {
        host: '0.0.0.0',
        port: 3000,
        hot: true,
        overlay: {
            errors: true
        },
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/public/',
        historyApiFallback: {
            index: '/public/index.html'
        },
        proxy: {
            '/api/*': {
                target: '',
                secure: false,
                changeOrigin: true
            }
        }
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
}

module.exports = config