import Vue from 'vue'
import { guess } from 'guess-webpack/api'

export default async function ({ app: { router } }) {
  router.afterEach(to => {
    // Wait for page to be displayed
    Vue.nextTick(() => {
      if (process.browser) {
        // console.log('Keys ', Object.keys(guess()))
        const predictions = Object.keys(guess()).sort((a, b) => a.probability - b.probability)
        // console.log('Predictions ', predictions)
        predictions.forEach(path => {
          // console.log('Path: ', path)
          router.getMatchedComponents(path).forEach(Component => {
            if (typeof Component === 'function' && !Component.__prefetched) {
              try {
                Component()
                Component.__prefetched = true
              } catch (e) {}
            }
          })
        })
      }
    })
  })
}
