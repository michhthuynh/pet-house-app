const postLogin = (req, res, next) => {
  const body = req.body
  res.send({
    data: body
  })
}

module.exports = postLogin