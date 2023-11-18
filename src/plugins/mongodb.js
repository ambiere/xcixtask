const fp = require('fastify-plugin')
const mongodb = require('@fastify/mongodb')

module.exports = fp(
  async function (fastify, opts) {
    await fastify.register(mongodb, {
      forceClose: true,
      maxPoolSize: 20,
      minPoolSize: 10,
      url: fastify.env.MONGO_URL,
      database: 'todo'
    })
  },
  {
    name: 'mongo-db',
    dependencies: ['application-config']
  }
)
