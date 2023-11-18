const fp = require('fastify-plugin')
const refreshTokenHandler = require('../../../util/refreshTokenHandler.js')

module.exports.prefixOverride = ''
module.exports = fp(async function refresh (fastify, opts) {
  fastify.post('/refresh', {
    onRequest: fastify.authenticate,
    schema: {
      headers: fastify.getSchema('schema:auth:refresh:token:header'),
      response: {
        200: fastify.getSchema('schema:auth:token:response')
      }
    },
    handler: refreshTokenHandler
  })
})
