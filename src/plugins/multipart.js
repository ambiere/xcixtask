const fp = require('fastify-plugin')
const multipart = require('@fastify/multipart')
const { parse } = require('csv-parse')

module.exports = fp(
  async function multipartPlugin (fastify, opts) {
    await fastify.register(multipart, {
      attachFieldsToBody: 'keyValues',
      sharedSchemaId: 'schema:file:import:todo',
      onFile: async function (part) {
        const lines = []
        const stream = part.file.pipe(
          parse({
            bom: true,
            skip_empty_lines: true,
            trim: true,
            columns: true
          })
        )

        for await (const line of stream) {
          lines.push({
            title: line.title,
            done: line.done === 'true'
          })
        }
        part.value = lines
      },
      limits: {
        fieldNameSize: 50,
        fieldSize: 100,
        fields: 10,
        fileSize: 1_000_000,
        files: 1
      }
    })
  },
  {
    name: 'multipart'
  }
)
