const path = require('path')

module.exports = {
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/public/',
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].chunk.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.join(__dirname, 'node_modules')
            },
            {
                test: /\.jsx$/,
                loader: 'babel_loader'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    }
}