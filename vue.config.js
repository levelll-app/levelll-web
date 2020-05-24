const bourbon = require('bourbon');
const path = require('path');

const includePaths = [...bourbon.includePaths, "/node_modules/flexboxgrid-sass/flexboxgrid.scss"];

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    },
    prerenderSpa: {
      registry: undefined,
      indexPath: path.join(__dirname, 'dist', 'index.html'),
      renderRoutes: [
        '/en',
        '/en/about',
        '/en/privacy-policy',
        '/en/terms-of-service',
        '/en/sign-in',
        '/bg',
        '/bg/about',
        '/bg/privacy-policy',
        '/bg/terms-of-service',
        '/bg/sign-in'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  },
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          includePaths: [...includePaths]
        },
        prependData: '@import "@/assets/styles/_base.scss";'
      }
    },
    sourceMap: true
  }
}
