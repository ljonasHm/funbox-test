'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
    },
    watch: true,

    module: {}
};