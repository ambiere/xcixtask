'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', {
    handler: async function (request, reply) {
      return { root: true }
    }
  })
}
