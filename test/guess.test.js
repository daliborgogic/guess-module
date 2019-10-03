import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'
import test from 'ava'

let nuxt = null

test.before(async () => {
  const config = {
    dev: false,
    rootDir: resolve(__dirname, '..'),
    modules: [
      [resolve(__dirname, '../lib/module.js'), {
        runtime: {
          delegate: true,
          prefetchConfig: {
            '4g': 0.3,
            '3g': 0.3,
            '2g': 0.3,
            'slow-2g': 0.3
          }
        },
        routeProvider: false,
        reportProvider: () => Promise
          .resolve(JSON.parse(require('fs')
            .readFileSync(resolve(__dirname, 'routes.json'))))
      }]
    ],
    router: {
      prefetchLinks: false
    }
  }
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  await nuxt.listen(3000, 'localhost')
}, 30000)

test('Route / exits and render HTML', async t => {
  const context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('</body>'))
})

test.after('Closing server and nuxt.js', t => nuxt.close())
