module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/global.scss";`,
      },
    },
  },
  publicPath:
    process.env.NODE_ENV === 'production' ? '/vue-binance-exchange-app/' : '/',
};
