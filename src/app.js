const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({origin: '*'}))
app.use(express.json({limit: '50mb', type: ['application/json', 'text/plain']}))

const usuarios = require('./routes/usuarios-route')
app.use('/cif/usuarios', usuarios)

const token = require('./routes/token-route')
app.use('/cif/token', token)

module.exports = app