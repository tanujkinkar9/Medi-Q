const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Medi-Q backend is running')
})

const authRoutes = require('./routes/authRoutes')
app.use('/api/auth', authRoutes)

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`)
})

