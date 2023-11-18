module.exports = require('fastify-plugin')(
  async function (fastify, opts) {
    fastify.register(require('@fastify/swagger'), {
      exposeRoute: true,
      swagger: {
        info: {
          title: 'xcixtask',
          description:
            'Modern and efficient RESTful to-do API built using the Fastify framework —provide a seamless and user-friendly experience for managing your to-do tasks.',
          version: require('../../package.json').version
        },
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
          {
            name: 'Hello World',
            description:
              'Modern and efficient RESTful to-do API built using the Fastify framework —provide a seamless and user-friendly experience for managing your to-do tasks.'
          }
        ]
      }
    })
    fastify.register(require('@fastify/swagger-ui'), {
      routePrefix: '/documentation'
    })
  },
  { dependencies: ['application-config'] }
)
