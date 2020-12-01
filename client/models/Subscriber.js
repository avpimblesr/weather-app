const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  zipCodes: []
})

// use in the SubscriberController
module.exports = mongoose.model('Subscriber', subscriberSchema)