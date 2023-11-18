'use strict'

module.exports = async function postStatus (fastify, opts) {
  fastify.post(':id/:status', {
    schema: {
      params: fastify.getSchema('schema:post:status:param'),
      response: {
        204: {},
        404: fastify.getSchema('schema:post:status:error:response')
      }
    },
    handler: async function (req, reply) {
      const id = req.params.id
      const status = req.params.status === 'done'
      const _id = new fastify.mongo.ObjectId(id)
      const filter = { _id }
      const updateDocument = { $set: { done: status, modifiedAt: new Date() } }
      const res = await opts.todos.updateOne(filter, updateDocument)

      if (res.modifiedCount === 0) {
        reply.code(404)
        return { error: 'Todo not found' }
      }
      reply.code(204)
    }
  })
}
