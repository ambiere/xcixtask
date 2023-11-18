'use strict'

module.exports = async function getTodos (fastify, opts) {
  fastify.get('/', {
    scheme: {
      querystring: fastify.getSchema('schema:get:todo:query'),
      response: {
        200: fastify.getSchema('schema:get:todo:response')
      }
    },
    handler: async function getTodos (req, reply) {
      try {
        const { skip, limit, title } = req.query
        const projection = { _id: 0 }
        const filter = {
          userId: req.user.id
        }
        title ? (filter.title = new RegExp(title, 'i')) : delete filter.title
        const data = await opts.todos.find(filter, { projection, limit, skip }).toArray()
        const totalCount = await opts.todos.countDocuments()
        reply.code(200)
        return { data, totalCount }
      } catch (error) {
        throw new Error(error)
      }
    }
  })
}
