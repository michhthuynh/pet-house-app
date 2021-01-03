const express = require('express')
const postLogin = require('../controllers/auth/postLogin')
const passport = require('passport')
const failedController = require('../controllers/auth/failed')
const successController = require('../controllers/auth/success')
const logout = require('../controllers/auth/logout')
const authRouter = express.Router()

authRouter
  .get('/login/success', successController)
  .get('/login/failed', failedController)
  .get('/logout', logout)
  .get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))
  .get('/google/callback', passport.authenticate('google', { failureRedirect: '/login/failed' }),)

module.exports = authRouter