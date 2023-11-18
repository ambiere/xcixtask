const fp = require('fastify-plugin')
const generateHash = require('../../../util/generateHash.js')
const refreshTokenHandler = require('../../../util/refreshTokenHandler.js')

module.exports.prefixOverride = ''
module.exports = fp(async function authenticate (fastify, opts) {
  fastify.post('/authenticate', {
    config: {
      logBody: true
    },
    schema: {
      body: fastify.getSchema('schema:auth:register:body'),
      response: {
        200: fastify.getSchema('schema:auth:token:response')
      }
    },
    handler: async function authenticateHandler (req, reply) {
      const username = req.body.username
      const password = req.body.password
      const user = await opts.users.findOne({ username })
      if (!user) {
        const err = new Error('Wrong credentials provided')
        err.statusCode = 401
        throw err
      }

      const { hash } = await generateHash(password, user.salt)
      if (hash !== user.hash) {
        const err = new Error('Wrong credentials provided')
        err.statusCode = 401
        throw err
      }

      user.id = String(user._id)
      delete user._id
      req.user = user
      return refreshTokenHandler(req, reply)
    }
  })
})
