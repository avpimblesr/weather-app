const express = require('express');
const router = express.Router();

const Subscriber = require('../models/subscriber');

// Register a new subscriber
// Use the subscriber model to create a new subscriber
router.post('/', async (req, res) => {
  const { fName, lName, email, password } = req.body;
  const subscriber = new Subscriber(
    {
      fName: fName,
      lName: lName,
      email: email,
      password: password
    }
  )

  try {
    const newSubscriber = await subscriber.save()
    res.status(201).json(newSubscriber)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})


// Get all subscribers
// Getting all subscribers and returning them in JSON format
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get a single subscriber


// Edit a subscriber


// Delete a subscriber




module.exports = router