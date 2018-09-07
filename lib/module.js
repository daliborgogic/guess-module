const { resolve } = require('path')
const { fs } = require('fs')
const { GuessPlugin } = require('guess-webpack')
const { GA } = process.env

module.exports = function module (moduleOptions) {
  let options = this.options['guess'] || moduleOptions

  // Hints Guess to not perform pre-fetching and delegate this logic to its consumer.
  options.runtime = {
    delegate: true,
    prefetchConfig: {
      '4g': 0.3,
      '3g': 0.3,
      '2g': 0.3,
      'slow-2g': 0.3
    }
  }

  // Guess does not have to collect the routes and the corresponding bundle entry points.
  options.routeProvider: false

  if (GA) options.GA = GA
  else options.reportProvider = () => Promise.resolve(JSON.parse(require('fs').readFileSync('./routes.json')));

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'guess.js',
    options,
    ssr: false
  })

  // Register webpack plugin
  this.options.build.plugins.push(new GuessPlugin(options))
}
