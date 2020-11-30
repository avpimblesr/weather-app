const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
})

// used in subscribers.js to create route handler middleware
module.exports = mongoose.model('User', userSchema)