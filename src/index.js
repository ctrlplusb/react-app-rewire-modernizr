const ModernizrPlugin = require('modernizr-webpack-plugin')

function rewireModernizrPlugin(config, env, modernizrPluginOptions = {}) {
  // eslint-disable-next-line no-param-reassign
  config.plugins = (config.plugins || []).concat([
    new ModernizrPlugin(modernizrPluginOptions),
  ])
  return config
}

module.exports = rewireModernizrPlugin
