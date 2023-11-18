'use strict'

const { build: buildApplication } = require('fastify-cli/helper')
const path = require('path')
const AppPath = path.join(__dirname, '..', 'src/server.js')

function config () {
  return {
    configData: {
      NODE_ENV: 'test',
      MONGO_URL: 'mongodb://0.0.0.0:27017/test',
      JWT_SECRET: 'thisisasupersucuredsectred-123456789',
      LOG_LEVEL: 'info'
    }
  }
}

async function build (t, env = config(), opts = {}) {
  const argv = [AppPath]
  const app = await buildApplication(argv, env, opts)
  t.teardown(app.close.bind(app))
  return app
}

module.exports = {
  config,
  build
}
