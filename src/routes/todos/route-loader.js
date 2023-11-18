'use strict'

const Autoload = require('@fastify/autoload')
const fp = require('fastify-plugin')
const path = require('path')

module.exports = fp(
  async function routeLoader (fastify, opts) {
    let todos
    if (fastify.mongo.db) {
      todos = fastify.mongo.db.collection('todos')
    } else todos = []

    fastify.addHook('onRequest', fastify.authenticate)
    fastify.register(Autoload, {
      dir: path.join(__dirname, '/'),
      dirNameRoutePrefix: false,
      ignorePattern: /.*route-loader(\.js|\.cjs)/i,
      options: { todos }
    })
  },
  {
    name: 'todo-routes',
    dependencies: ['@fastify/mongodb', 'mongo-db', 'authentication-plugin'],
    encapsulate: true
  }
)

module.exports.autoPrefix = 'v1/todos'
