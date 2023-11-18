const { build } = require('../../helper.js')
const crypto = require('node:crypto')
const t = require('tap')

t.test('auth', async (t) => {
  t.test('cannot access protected routes without header', async (t) => {
    const app = await build(t)
    const response = await app.inject({ method: 'GET', url: 'v1/todos/' })
    t.equal(response.statusCode, 401)
    t.same(response.json(), {
      statusCode: 401,
      code: 'FST_JWT_NO_AUTHORIZATION_IN_HEADER',
      error: 'Unauthorized',
      message: 'No Authorization was found in request.headers'
    })
  })

  t.test('cannot access protected routes with wrong header', async (t) => {
    const app = await build(t)
    const response = await app.inject({
      method: 'GET',
      url: 'v1/todos/',
      headers: { authorization: 'Bearer authorizationtoken' }
    })
    t.equal(response.statusCode, 401)
    t.same(response.json(), {
      statusCode: 401,
      code: 'FST_JWT_AUTHORIZATION_TOKEN_INVALID',
      error: 'Unauthorized',
      message: 'Authorization token is invalid: The token is malformed.'
    })
  })

  t.test('register the user', async (t) => {
    const app = await build(t)
    const user = crypto.randomBytes(Math.ceil(32 / 2)).toString('hex')
    const response = await app.inject({
      method: 'POST',
      url: 'v1/auth/register',
      payload: {
        username: user,
        password: 'userpassword'
      }
    })
    t.equal(response.statusCode, 201)
    t.same(response.json(), { registered: true })

    t.test('cannot register the same user twice', async (t) => {
      const response = await app.inject({
        method: 'POST',
        url: 'v1/auth/register',
        payload: {
          username: user,
          password: 'userpassword'
        }
      })
      t.equal(response.statusCode, 409)
    })

    t.test('wrong password login', async (t) => {
      const login = await app.inject({
        method: 'POST',
        url: 'v1/auth/authenticate',
        payload: {
          username: user,
          password: 'wrongpassword'
        }
      })
      t.equal(login.statusCode, 401)
      t.same(login.json(), {
        statusCode: 401,
        error: 'Unauthorized',
        message: 'Wrong credentials provided'
      })
    })

    t.test('successful login', async (t) => {
      const login = await app.inject({
        method: 'POST',
        url: 'v1/auth/authenticate',
        payload: {
          username: user,
          password: 'userpassword'
        }
      })
      t.equal(login.statusCode, 200)
      t.match(login.json(), { token: /(\w*\.){2}.*/ }, 'valid JWT token')

      t.test('access protected route', async (t) => {
        const response = await app.inject({
          method: 'GET',
          url: 'v1/todos/',
          headers: {
            authorization: `Bearer ${login.json().token}`
          }
        })
        t.equal(response.statusCode, 200)
        t.ok(response.json(), 'string', 'id of posted todo')
      })

      t.test('successfull logout', async (t) => {
        const response = await app.inject({
          method: 'POST',
          url: 'v1/auth/logout',
          headers: {
            authorization: `Bearer ${login.json().token}`
          }
        })
        t.equal(response.statusCode, 204)
      })

      t.test('cannot access protected route after logout', async (t) => {
        const response = await app.inject({
          method: 'GET',
          url: 'v1/todos/',
          headers: {
            authorization: `Bearer ${login.json().token}`
          }
        })
        t.equal(response.statusCode, 401)
      })
    })
  })

  t.test('failed login for not existing user', async (t) => {
    const app = await build(t)
    const response = await app.inject({
      method: 'POST',
      url: 'v1/auth/authenticate',
      payload: {
        username: crypto.randomBytes(Math.ceil(32 / 2)).toString('hex'),
        password: 'userpassword'
      }
    })
    t.equal(response.statusCode, 401)
    t.same(response.json(), {
      statusCode: 401,
      error: 'Unauthorized',
      message: 'Wrong credentials provided'
    })
  })
})
