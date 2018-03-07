/* eslint-disable no-param-reassign */

function rewireModernizrPlugin(config, env, modernizrConfigPath) {
  config.module = config.module || {}
  config.module.rules = (config.module.rules || []).concat([
    {
      test: /\.modernizrrc.js$/,
      use: ['modernizr-loader'],
    },
    {
      test: /\.modernizrrc(\.json)?$/,
      use: ['modernizr-loader', 'json-loader'],
    },
  ])
  config.resolve = config.resolve || {}
  config.resolve.alias = config.resolve.alias || {}
  config.resolve.alias.modernizr$ = modernizrConfigPath
  return config
}

module.exports = rewireModernizrPlugin
