module.exports = verifyLogged = (req, res, next) => {
  if (!req.user) {
    res.sendStatus(401)
    return
  }
  next()
}