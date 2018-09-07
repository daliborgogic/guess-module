# guess-module

> Guess.js integration for Nuxt.js with [guess-webpack](https://www.npmjs.com/package/guess-webpack)

[![CircleCI](https://circleci.com/gh/daliborgogic/guess-module.svg?style=svg)](https://circleci.com/gh/daliborgogic/guess-module)

## Setup

- Add @nuxtjs/guess dependency using yarn or npm to your project
- Add @nuxtjs/guess to modules section of ```nuxt.config.js```

```javascript
{
  modules: [
    // Simple usage
    [ '@nuxtjs/guess', { GA: '1234567' }]
 ]
}
```

Using top level options

```javascript
{
  modules: [
    [ '@nuxtjs/guess' ]
  ],
 
  guess: { GA: '123456' }
}
```

## Usage

## License
