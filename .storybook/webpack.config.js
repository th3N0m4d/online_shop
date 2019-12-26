const path = require('path');
const webpackConfig = require('../webpack.config')


// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules = [...webpackConfig.module.rules]

  config.resolve.alias = {
    ...config.resolve.alias,
    ...webpackConfig.resolve.alias
  }
  // config.module.rules.push( {
  //   test: /\.scss$/,
  //   use: ['style-loader', 'css-loader', 'sass-loader'],
  //   // include: path.resolve(__dirname, '../'),
  // });

  // config.module.rules.push({
  //   test: /\.css$/,
  //   use: ['style-loader', 'css-loader'],
  //   include: path.resolve(__dirname, '../'),
  // })

  // Return the altered config
  return config;
};
