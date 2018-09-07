import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt-edge'
import test from 'ava'

let nuxt = null

test.before(async () => {
  const config = {
    dev: false,
    rootDir: resolve(__dirname, '..')
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
