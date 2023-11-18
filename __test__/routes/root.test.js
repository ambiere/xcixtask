'use strict'

const t = require('tap')
const { build } = require('../helper')

t.test('default root route', async (t) => {
  const app = await build(t)
  await app.ready()
  const res = await app.inject({
    method: 'GET',
    url: '/'
  })
  t.same(JSON.parse(res.payload), { root: true })
})
