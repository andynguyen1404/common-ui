const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
};