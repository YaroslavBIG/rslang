const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: 'none',
  watch: false,
  module: {
    rules: [],
  },

  plugins: [],
});

module.exports = new Promise((resolve) => {
  resolve(devWebpackConfig);
});
