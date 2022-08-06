const path = require('path')

module.exports = {
  assetsDir: '',
  outputDir: 'dist',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/helpers/vars.scss"; @import "@/assets/styles/helpers/functions.scss"; @import "@/assets/styles/helpers/mixins.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      modules: [__dirname, 'node_modules'],
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  }
}
