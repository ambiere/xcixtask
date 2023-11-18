'use strict'

module.exports = async function postTodo (fastify, opts) {
  fastify.post('/', {
    schema: {
      body: fastify.getSchema('schema:post:todo:body'),
      response: {
        201: fastify.getSchema('schema:post:todo:response')
      }
    },
    handler: async function (req, reply) {
      const _id = new fastify.mongo.ObjectId()
      const userId = req.user.id
      const now = new Date()
      const createdAt = now
      const modifiedAt = now

      const newTodo = {
        _id,
        id: String(_id),
        userId,
        ...req.body,
        done: false,
        createdAt,
        modifiedAt
      }

      const { insertedId } = await opts.todos.insertOne(newTodo)
      reply.code(201)
      return String(insertedId)
    }
  })
}
