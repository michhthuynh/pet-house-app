const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const UserGoogleModel = require('../models/UserGoogle')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserGoogleModel.findById(id)
    done(null, user)
  } catch (error) {
    done(new Error('Failed to deserialize an user'))
  }
})

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/api/auth/google/callback'
  }, async (token, refreshToken, profile, done) => {
    const user = await UserGoogleModel.find({ googleId: profile.id })
    if (user[0] === undefined) {
      const userGoogle = await UserGoogleModel.create({
        googleId: profile.id,
        fullName: profile.displayName
      })
      return done(null, userGoogle)
    } else {
      return done(null, user[0])
    }
  })
)