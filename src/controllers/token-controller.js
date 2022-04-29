require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.get = ('/', (req, res) => {
    const authorization = req.headers.authorization
    const token = jwt.sign({authorization}, process.env.SECRET, {}, null)
    res.status(200).send({token})
})