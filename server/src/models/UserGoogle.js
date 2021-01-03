const mongoose = require('mongoose')

const userGoogleSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  fullName: {
    type: String,
  }
})

const UserGoogleModel = mongoose.model('userGoogle', userGoogleSchema)
module.exports = UserGoogleModel