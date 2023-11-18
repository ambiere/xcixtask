const t = require("tap")
const split = require("split2")
const crypto = require("node:crypto")
const { build, config } = require("../helper")
const logger = require("../../src/config/logger.js")

t.test("must redact sensible data", async (t) => {
  t.plan(2)
  const user = crypto.randomBytes(Math.ceil(32 / 2)).toString("hex")
  const stream = split(JSON.parse)
  const options = { logger: { ...logger, stream } }
  const app = await build(t, { ...config(), LOG_LEVEL: "info" }, options)

  await app.inject({
    method: "POST",
    url: "/v1/auth/register",
    payload: {
      username: user,
      password: "userpassword",
    },
  })

  for await (const line of stream) {
    if (line.msg && line.msg === "request completed") {
      t.ok(line.req.body, "the request does log the body")
      t.equal(line.req.body.password, "********", "field redacted")
      break
    }
  }
})
