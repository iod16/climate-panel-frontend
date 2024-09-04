const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    host: 'mydashboard.local',
    port: 8080,
    allowedHosts: 'all',
    proxy: {
      '/weather': {
        target: 'http://mydashboard.local:8000',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/weather': '/weather' }
      }
    }
  }
})
