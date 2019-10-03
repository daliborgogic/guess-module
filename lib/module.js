const { resolve } = require('path')
const { GuessPlugin } = require('guess-webpack')

module.exports = function module (moduleOptions) {
  const options = this.options.guess || moduleOptions

  // Hints Guess to not perform pre-fetching and delegate this logic to its consumer.
  options.runtime = options.runtime || {
    delegate: true
  }

  options.jwt = options.jwt || null

  // Guess does not have to collect the routes and the corresponding bundle entry points.
  options.routeProvider = options.routeProvider || false

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'guess.js',
    options,
    ssr: false
  })

  // Register webpack plugin (only for client)
  this.extendBuild((config, ctx) => {
    if (!ctx.isDev && ctx.isClient) {
      config.plugins.push(new GuessPlugin(options))
    }
  })
}
