const fp = require('fastify-plugin')
const env = require('@fastify/env')

module.exports = fp(
  async function (fastify, opts) {
    await fastify.register(env, {
      confKey: 'env',
      data: opts.configData,
      schema: fastify.getSchema('schema:dotenv')
    })
    fastify.log.level = fastify.env.LOG_LEVEL
  },
  { name: 'application-config' }
)
