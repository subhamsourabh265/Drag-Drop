const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: './src/app.ts',
    mode: 'production',
    devServer: {
        static: [
            {
                directory: path.join(__dirname)
            }
        ]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
}