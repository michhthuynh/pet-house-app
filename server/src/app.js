const express = require('express')
const cors = require('cors')
const keys = require('./assets/keys')
const router = require('./routers')
const connectDatabase = require('./configs/mongoSetup')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./configs/passportSetup')
connectDatabase()

const port = keys.PORT || 5000
const app = express()

app.use(cookieSession({
  name: 'session',
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())




app.use(cors())
app.use('/api', router)

app.listen(port, () => console.log(`Server is running at ${port}`))
