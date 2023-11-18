const t = require('tap')
const { build, config } = require('../helper')

t.test('the application should start', async (t) => {
  const app = await build(t)
  await app.ready()
  t.pass('the application is ready')
})

t.test('the application should not start', async (t) => {
  t.test('if there are missing ENV vars', async (t) => {
    try {
      await build(t, {
        ...config(),
        DEV_MONGO_URL: undefined
      })
    } catch (error) {
      t.ok(error, 'error must be set')
      t.match(error.message, "required property 'DEV_MONGO_URL'")
    }
  })

  t.test('when mongobd is unreachable', async (t) => {
    try {
      await build(t, {
        ...config(),
        DEV_MONGO_URLMONGO_URL: 'mongodb://localhost:27099/test'
      })
    } catch (error) {
      t.ok(error, 'error must be set')
      t.match(error.message, 'connect ECONNREFUSED')
    }
  })
})
