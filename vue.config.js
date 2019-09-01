const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('_c', resolve('src/components'))
  },

  productionSourceMap: false,
  outputDir: '../front',
  runtimeCompiler: true,
  publicPath: '/front/'
}
