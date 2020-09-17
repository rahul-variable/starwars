const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = (env) => {
  return merge(common(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      port: 3000,
      open: true,
      historyApiFallback: true,
    },
  });
};
