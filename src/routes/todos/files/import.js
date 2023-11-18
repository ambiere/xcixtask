'use strict'

module.exports = async function importTodos (fastify, opts) {
  fastify.post('/import', {
    schema: {
      response: {
        201: fastify.getSchema('schema:file:import:todo:response')
      }
    },
    handler: async function postTodos (req, reply) {
      const todos = req.body.files
      const now = new Date()
      const userId = req.user.id

      const todosToInsert = todos.map((todo) => {
        const _id = new fastify.mongo.ObjectId()
        return {
          _id,
          id: String(_id),
          userId,
          ...todo,
          createdAt: now,
          modifiedAt: now
        }
      })
      await opts.todos.insertMany(todosToInsert)
      reply.code(201)
      return todosToInsert.map((todo) => todo.id)
    }
  })
}
