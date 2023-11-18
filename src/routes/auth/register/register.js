const fp = require('fastify-plugin')
const generateHash = require('../../../util/generateHash.js')

module.exports.prefixOverride = ''
module.exports = fp(async function register (fastify, opts) {
  fastify.post('/register', {
    config: {
      logBody: true
    },
    schema: {
      body: fastify.getSchema('schema:auth:register:body')
    },
    handler: async function registerHandler (req, reply) {
      const username = req.body.username
      const password = req.body.password
      const existingUser = await opts.users.findOne({ username })

      if (existingUser) {
        const err = new Error('User already registered')
        err.statusCode = 409
        throw err
      }

      const { hash, salt } = await generateHash(password)
      try {
        const newUser = await opts.users.insertOne({ username, salt, hash })
        const newUserId = newUser.insertedId
        req.log.info({ userId: newUserId }, 'user registered')
        reply.code(201)
        return { registered: true }
      } catch (error) {
        req.log.error(error, 'failed to register user')
        reply.code(500)
        return { registered: false }
      }
    }
  })
})
