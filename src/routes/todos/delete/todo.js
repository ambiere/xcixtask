'use strict'

module.exports = async function deleteTodo (fastify, opts) {
  fastify.delete('/:id', {
    schema: {
      params: fastify.getSchema('schema:get:todo:param'),
      response: {
        204: {}
      }
    },
    handler: async function (req, reply) {
      const id = req.params.id
      const _id = new fastify.mongo.ObjectId(id)
      const filter = { _id }
      const res = await opts.todos.deleteOne(filter)
      if (res.deletedcount === 0) {
        reply.code(404)
        return { error: 'Todo not found' }
      }
      reply.code(204)
    }
  })
}
