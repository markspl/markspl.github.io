// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // Would use "/" as publicPath on GitHub pages, for dev'ing nothing.
  // Default NODE_ENV is "production".
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '',
};
