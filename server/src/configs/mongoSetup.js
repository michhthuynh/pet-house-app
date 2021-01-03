const keys = require('../assets/keys')
const mongoose = require('mongoose')

const optionMongoose = { useNewUrlParser: true, useUnifiedTopology: true };
const connectDatabase = () => {
  const urlMongoData = `mongodb://${keys.MONGO_HOST}:${keys.MONGO_PORT}/${keys.MONGO_DB}`
  console.log(`Connecting to ${keys.MONGO_DB} database...`)
  mongoose.connect(urlMongoData, optionMongoose)
    .then(() => {
      console.log("Successfully connected to the database")
    })
    .catch((err) => {
      console.log(`Could not connect to the database. Exiting now...\n ${err}`)
      process.exit()
    })
}

module.exports = connectDatabase 