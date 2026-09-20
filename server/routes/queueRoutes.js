const express = require('express')
const router = express.Router()
const { joinQueue, getQueue,markDone } = require('../controllers/queueController')

router.post('/join',joinQueue)
router.get('/list',getQueue)
router.put('/done/:id',markDone)

module.exports = router