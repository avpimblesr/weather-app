const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  zipCodes: []
})

// used in subscribers.js to create route handler middleware
module.exports = mongoose.model('Subscriber', subscriberSchema)