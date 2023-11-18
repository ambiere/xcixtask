const metrics = require('fastify-metrics')
const fp = require('fastify-plugin')

module.exports = fp(
  async function (fastify) {
    if (
      process.env.NODE_ENV !== 'test' &&
      fastify.env.NODE_ENV !== 'development'
    ) {
      fastify.register(metrics, {
        defaultMetrics: { enabled: true },
        endpoint: null,
        name: 'metrics',
        routeMetrics: { enabled: true }
      })

      const promServer = await require('../util/buildPromServer.js')(fastify)
      fastify.addHook('onClose', async (instance) => {
        await promServer.close()
      })

      await promServer.listen({ port: 9001, host: '0.0.0.0' })
    }
  },
  { name: 'prometheus' }
)
