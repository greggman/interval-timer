const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './interval-timer.js',
    output: {
        path: path.normalize(path.join(__dirname, '..')),
        filename: 'interval-timer.js',
    },
}

