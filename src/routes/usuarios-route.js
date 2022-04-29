require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const controller = require('../controllers/usuarios-controller')

router.post('/:funcao', JWT, controller.post)

function JWT(req, res, next) {
    const authorization = req.headers.authorization
    jwt.verify(authorization, process.env.SECRET, (error, decoded) => {
        if (error) return res.status(401).send({message: error.message})
        req.token = decoded.payload
        next()
    })
}

module.exports = router