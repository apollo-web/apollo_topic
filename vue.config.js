module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import "@/styles/style.scss";
              `
      },
    },
  },
  chainWebpack(config) {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  },
  devServer: {
    port: 8080,
  },
  pwa: {
    name: 'apollo_checkout',
    themeColor: '#844DFF',
    msTileColor: '#844DFF',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    appleMobileWebAppCapable: 'no',
  },
}
