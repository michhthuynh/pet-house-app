const keys = require("../../assets/keys")

module.exports = logout = (req, res) => {
  req.logout()
  res.redirect(keys.CLIENT_HOME_PAGE_URL)
}