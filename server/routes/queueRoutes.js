const express = require('express')
const router = express.Router()
const { joinQueue, getQueue,markDone,updateStatus } = require('../controllers/queueController')

router.post('/join',joinQueue)
router.get('/list',getQueue)
router.put('/done/:id',markDone)
router.put('/status/:id',updateStatus)

module.exports = router