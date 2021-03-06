const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: [
        "react-hot-loader/patch",
        path.join(__dirname, 'index.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/public/"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.join(__dirname, '/node_modules')
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        contentBase: './public/',
        publicPath: '/public/',
        hot: true
    }
}