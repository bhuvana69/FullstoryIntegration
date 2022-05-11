const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    https:true,
    proxy: {
      '/api': {
        target: 'https://export.fullstory.com',
        ws: true,
        changeOrigin: true
      }}
  }
})
