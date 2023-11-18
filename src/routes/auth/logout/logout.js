const fp = require('fastify-plugin')

module.exports.prefixOverride = ''
module.exports = fp(async function logout (fastify, opts) {
  fastify.post('/logout', {
    onRequest: fastify.authenticate,
    handler: async function logoutHandler (req, reply) {
      req.revokeToken()
      reply.code(204)
    }
  })
})
