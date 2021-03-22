'use strict';

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
    },
    watch: true,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};