# guess-module

>[ Guess.js](https://github.com/guess-js/guess) integration for [Nuxt.js](https://github.com/nuxt/nuxt.js/) with [guess-webpack](https://www.npmjs.com/package/guess-webpack)

![](https://github.com/daliborgogic/guess-module/workflows/Module%20Cross-platform%20CI/badge.svg)

## Setup

- Add `@nuxtjs/guess` dependency using yarn or npm to your project
- Add `@nuxtjs/guess` to modules section of `nuxt.config.js`
- If using Nuxt > 2.4.0, set `router.prefetchLinks` to `false` in `nuxt.config.js`

```javascript
export default {
  modules: [
    [ '@nuxtjs/guess', { GA: 'XXXXXXX' }]
   ],
   // Nuxt > 2.4.0
  router: {
    prefetchLinks: false
  }
 }
```

Options given directly to [guess-webpack options](https://www.npmjs.com/package/guess-webpack#advanced-usage).

## Usage

Nothing more to do, `@nuxtjs/guess` will automagically prefetch the routes depending of your Google Analytics stats 😎

## License

[MIT](https://opensource.org/licenses/MIT)

