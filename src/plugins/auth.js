'use strict'

const fp = require('fastify-plugin')
const jwt = require('@fastify/jwt')

module.exports = fp(
  async function authentication (fastify, opts) {
    const revokedTokens = new Map()
    fastify.register(jwt, {
      secret: fastify.env.JWT_SECRET,
      trusted: function isTrusted (req, decodedToken) {
        return !revokedTokens.has(decodedToken.jti)
      }
    })
    fastify.decorate('authenticate', async function authenticate (req, reply) {
      try {
        await req.jwtVerify()
      } catch (error) {
        reply.send(error)
      }
    })
    fastify.decorateRequest('revokeToken', function () {
      revokedTokens.set(this.user.jti, true)
    })
    fastify.decorateRequest('generateToken', async function () {
      const token = fastify.jwt.sign(
        {
          id: String(this.user.id),
          username: this.user.username
        },
        {
          jti: String(Date.now()),
          expiresIn: '24h'
        }
      )
      return token
    })
  },
  {
    name: 'authentication-plugin',
    dependencies: ['application-config']
  }
)
