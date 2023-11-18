'use strict'

const { stringify } = require('csv-stringify')

module.exports = async function exportTodos (fastify, opts) {
  fastify.get('/export', {
    schema: {
      querystring: fastify.getSchema('schema:file:export:todos')
    },
    handler: async function exportTodos (req, reply) {
      const { title } = req.query
      const filter = title ? { title } : {}
      const skip = 0
      const limit = undefined
      const asStream = true
      const cursor = await opts.todos.find(filter, skip, limit, asStream)

      reply.header(
        'Content-Disposition',
        'attachment;filename="todo-FileList.csv"'
      )
      reply.type('text/csv')
      return cursor.stream().pipe(
        stringify({
          quoted_string: true,
          header: true,
          columns: ['title', 'done', 'createdAt', 'updatedAt', 'id'],
          cast: {
            boolean: (value) => (value ? 'true' : 'false'),
            date: (value) => value.toISOString()
          }
        })
      )
    }
  })
}
