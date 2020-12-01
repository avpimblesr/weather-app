const express = require('express')
const mongoose = require('mongoose')
const PORT = 5000

const AuthRoute = require('./routes/auth')

const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect('mongodb://localhost:27017/weather', options)
const db = mongoose.connection

db.on('error', (err) => {console.log(err)})
db.once('open', () => console.log('Database connection established.'))

const app = express()

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))

app.use(express.json())
app.use('/', AuthRoute)