// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/main.scss";`,
      },
    },
  },
  pluginOptions: {
    electronBuilder: {
      removeElectronJunk: true,
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
      },
    },
  },
};
