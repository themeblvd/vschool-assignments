const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'server/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    target: 'node',
    node: {
        __filename: true,
        __dirname: true
    }
};
