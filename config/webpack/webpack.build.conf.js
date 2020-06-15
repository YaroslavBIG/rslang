const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.(m?js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/transform-runtime'],
              ['transform-remove-strict-mode'],
            ],
          },
        },
      },
    ],
  },

  plugins: [],
});

module.exports = new Promise((resolve) => {
  resolve(devWebpackConfig);
});
