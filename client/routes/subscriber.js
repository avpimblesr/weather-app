const express = require('express');
const router = express.Router();

const SubscriberController = require('../controllers/SubscriberController');

router.get('/', SubscriberController.index)
router.post('/show', SubscriberController.show)
router.post('/store', SubscriberController.store)
router.post('/update', SubscriberController.update)
router.post('/delete', SubscriberController.destroy)

module.exports = router