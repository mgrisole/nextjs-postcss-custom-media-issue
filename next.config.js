const CssnanoPlugin = require('cssnano-webpack-plugin')

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new CssnanoPlugin({
      sourceMap: true
    }))
    return config
  }
}
