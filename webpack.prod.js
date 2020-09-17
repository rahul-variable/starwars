const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = env => {
  return merge(common(env), {
    mode: 'production',
    devtool: 'source-map',
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  });
};
