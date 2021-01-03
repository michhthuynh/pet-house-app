module.exports = failedController = (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate"
  })
}