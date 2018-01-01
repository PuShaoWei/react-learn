const React    = require('React');
const ReactDOM = require('react-dom');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
            },
            {
              test: [/\.js$/,/\.jsx?$/],
              use: ['react-hot-loader/webpack','babel-loader'],
              exclude: /node_modules/
            }
        ]
    }
};
