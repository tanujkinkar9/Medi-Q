const User = require('../models/User')
const bcrypt = require('bcrypt')

const signupUser = async( req, res) => {
    try {
        const { email, password, role } = req.body

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            email,
            password: hashedPassword,
            role
        })
        await newUser.save()

        res.status(201).json({ message: 'User created successfully'})
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message})
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password, role } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password'})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch){
            return res.status(400).json({ message:'Invalid email or password'})
        }
       
        if(user.role !== role) {
            return res.status(400).json({ message: 'Role does not match'})
        }

        res.status(200).json({
            message: 'Login successful',
            user: { email: user.email, role: user.role }
        })
} catch (err){
    res.status(500).json({ message: 'Server error',error: err.message})
}
}

module.exports = { loginUser, signupUser }