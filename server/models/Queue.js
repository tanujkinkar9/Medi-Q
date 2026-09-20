const mongoose = require('mongoose')


const queueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required:true
    },
    token: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'waiting'
    }
    
},{ timestamps: true })

const Queue = mongoose.model('Queue', queueSchema)

module.exports = Queue