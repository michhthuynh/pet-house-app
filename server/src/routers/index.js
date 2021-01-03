const express = require('express')
const verifyLogged = require('../middleware/verifyLogged')
const authRouter = require('./auth')
const router = express.Router()
const getAllPet = require('../controllers/products/getPet')

router
  .use('/auth/', authRouter)
  .get('/product', verifyLogged, getAllPet)
module.exports = router