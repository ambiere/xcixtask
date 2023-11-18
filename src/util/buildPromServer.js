const Fastify = require('fastify')

module.exports = async function (fastifyInstance) {
  const promServer = Fastify({ logger: fastifyInstance.log })
  promServer.route({
    url: '/metrics',
    method: 'GET',
    logLevel: 'info',
    handler: (_, reply) => {
      reply.type('text/plain')
      return fastifyInstance.metrics.client.register.metrics()
    }
  })
  return promServer
}
