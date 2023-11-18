'use strict'

module.exports = async function putTodo (fastify, opts) {
  fastify.put(':id', {
    schema: {
      params: fastify.getSchema('schema:get:todo:param'),
      body: fastify.getSchema('schema:put:todo:body')
    },
    handler: async function (req, reply) {
      const id = req.params.id
      const _id = new fastify.mongo.ObjectId(id)
      const filter = { _id }
      const updateDocument = { $set: { ...req.body, modifiedAt: new Date() } }
      const res = await opts.todos.updateOne(filter, updateDocument)
      if (res.modifiedCount === 0) {
        reply.code(404)
        return { error: 'Todo not found' }
      }
      reply.code(204)
    }
  })
}
