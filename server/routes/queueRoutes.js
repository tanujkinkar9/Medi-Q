const express = require('express')
const router = express.Router()
const { joinQueue, getQueue,markDone,updateStatus } = require('../controllers/queueController')
const { requireAuth } = require('../middleware/auth')
const { requireRole } = require('../middleware/role')
router.post('/join',joinQueue)
router.get('/list',getQueue)
router.put('/done/:id',requireAuth, requireRole('doctor','receptionist'),markDone)
router.put('/status/:id',requireAuth,requireRole('doctor','receptionist'),updateStatus)

module.exports = router