module.exports = async function refreshTokenHandler (req, reply) {
  const token = await req.generateToken()
  return { token }
}
