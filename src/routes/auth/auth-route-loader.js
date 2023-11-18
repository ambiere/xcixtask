'use strict'

const Autoload = require('@fastify/autoload')
const fp = require('fastify-plugin')
const path = require('path')

module.exports = fp(
  async function authRouteLoader (fastify, opts) {
    let users
    if (fastify.mongo.db) {
      users = fastify.mongo.db.collection('users')
    } else users = []
    fastify.register(Autoload, {
      dir: path.join(__dirname, '/'),
      dirNameRoutePrefix: false,
      ignorePattern: /.*auth-route-loader(\.js|\.cjs)/i,
      options: { users }
    })
  },
  {
    name: 'auth-routes',
    dependencies: ['authentication-plugin', 'mongo-db', '@fastify/mongodb'],
    encapsulate: true
  }
)

module.exports.autoPrefix = 'v1/auth/'
