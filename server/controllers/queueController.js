const Queue = require('../models/Queue')

const joinQueue = async(req, res) => {
    const { name, phone } = req.body
     try {
      const count = await Queue.countDocuments()
      const tokenNumber = count +1
      const token = 'MQ-' + String(tokenNumber).padStart(3, '0')

      const newEntry = new Queue({
        name,
        phone,
        token 
      })
      await newEntry.save()

      res.status(201).json({
        message: 'Queue joined successfully',
        token: newEntry.token
      })
     } catch (err) {
        res.status(500).json({message: 'Server error', error: err.message })
     }
}

const getQueue = async (req, res) => {
  try {
    const queueList = await Queue.find({ status: 'waiting'})
    res.status(200).json(queueList)
  } catch (err) {
    res.status(500).json({ message: 'Server error',error: err.message })
  }
}

const markDone = async (req, res) => {
  try{
    const { id } = req.params
    const updated = await Queue.findByIdAndUpdate(id, { status: 'done' },{nex:true})
    res.status(200).json(updated)
  } catch (err) {
    res.status(500).json({message:'Server error',error:err.message})
  }
}

module.exports = { joinQueue, getQueue,markDone }