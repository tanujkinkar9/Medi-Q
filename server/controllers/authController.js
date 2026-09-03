const loginUser = (req, res) => {
    const { email, password, role} = req.body

    console.log('Login attempt:', email, password, role)

    //Abhi dummy check - baad mein database se verify karenge

    if(email && password && role) {
    res.status(200).json({
        message: 'Login successful',
        user: { email, role }
    })
    } else {
        res.status(400).json({message: 'Missing fields'})
    }
}

module.exports = { loginUser }