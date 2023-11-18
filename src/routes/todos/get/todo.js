'use strict'

module.exports = async function getTodo (fastify, opts) {
  fastify.get('/:id', {
    schema: {
      params: fastify.getSchema('schema:get:todo:param'),
      response: {
        200: fastify.getSchema('schema:todo:data')
      }
    },
    handler: async function (req, reply) {
      const id = req.params.id
      const _id = new fastify.mongo.ObjectId(id)
      const todo = await opts.todos.findOne(
        { _id },
        { projection: { _id: 0 } }
      )
      if (!todo) {
        reply.code(404)
        return { error: 'Todo not found' }
      }
      return todo
    }
  })
}
