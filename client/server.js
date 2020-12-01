const express = require('express')
const mongoose = require('mongoose')

const AuthRoute = require('./routes/auth')
const SubscriberRoute = require('./routes/subscriber')

// Database server
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect('mongodb://localhost:27017/weather', options)
const db = mongoose.connection

db.on('error', (err) => { console.log(err) })
db.once('open', () => console.log('Database connection established.'))

// Web server
const app = express()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use('/authenticate', AuthRoute)
app.use('/subscriber', SubscriberRoute)