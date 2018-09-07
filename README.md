# guess-module [wip]

>[ Guess.js](https://github.com/guess-js/guess) integration for [Nuxt.js](https://github.com/nuxt/nuxt.js/) with [guess-webpack](https://www.npmjs.com/package/guess-webpack)

[![CircleCI](https://circleci.com/gh/daliborgogic/guess-module.svg?style=svg)](https://circleci.com/gh/daliborgogic/guess-module)

## Setup

- Add `@nuxtjs/guess` dependency using yarn or npm to your project
- Add `@nuxtjs/guess` to modules section of `nuxt.config.js`

```javascript
{
  modules: [
    [ '@nuxtjs/guess', { GA: '1234567' }]
 ]
}
```

Options given directly to [guess-webpack options](https://www.npmjs.com/package/guess-webpack#advanced-usage).

## Usage

Nothing more to do, `@nuxtjs/guess` will automagically prefetch the routes depending of your Google Analytics stats 😎

## License

[MIT](https://opensource.org/licenses/MIT)

