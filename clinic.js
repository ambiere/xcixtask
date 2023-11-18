const path = require('node:path')

const { listen } = require('fastify-cli/helper')
const AppPath = path.join(__dirname, '..', '/server/server.js')
const argv = [AppPath]

listen(argv)
