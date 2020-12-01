const Subscriber = require('../models/Subscriber')

// Show the list of Subscribers
const index = (req, res, next) => {
  Subscriber.find()

    .then(response => {
      res.json({ response })
    })

    .catch(error => {
      res.json({ message: 'An error has occured.' })
    })
}

// Show one subscriber by ID
const show = (req, res, next) => {
  let subscriberID = req.body.subscriberID
  Subscriber.findById(subscriberID)

    .then(response => {
      res.json({ response })
    })

    .catch(error => {
      res.json({ message: 'An error has occured. Subscriber could not be found.' })
    })
}

const store = (req, res, next) => {
  let subscriber = new Subscriber({
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    password: req.body.password,
    zipCodes: req.body.zipCodes
  })
  subscriber.save()
    .then(response => {
      res.json({ message: 'Subscriber added successfully.' })
    })

    .catch(error => {
      res.json({ message: 'An error has occured. Subscriber has not been saved.' })
    })
}

// update an employee
const update = (req, res, next) => {
  let subscriberID = req.body.subscriberID

  let updateData = {
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    password: req.body.password,
    zipCodes: req.body.zipCodes
  }

  Subscriber.findByIdAndUpdate(subscriberID, { $set: updateData })
    .then(() => {
      res.json({ message: 'Subscriber updated successfully' })
        .catch(error => {
          res.json({ message: 'An error has occured. Subscriber has not been updated.' })
        })
    })
}

// Delete a subscriber
const destroy = (req, res, next) => {
  let subscriberID = req.body.subscriberID
  Subscriber.findOneAndRemove(subscriberID)
    .then(() => {
      res.json({ message: 'Subscriber has been successfully deleted.' })
      .catch(error => {
        res.json({ message: 'An error has occured. Subscriber has not been deleted.' })
      })
    })
}



module.exports = { index, show, store, update, destroy }