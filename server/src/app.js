const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

// Activate libs
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

// Routes
app.post('/register', (req, res) => {
  res.send({
    mesaje: `If your email is ${req.body.email}, then you win! Hoooraaay`
  })
})

// Create an express server
app.listen(process.env.PORT || 8081)
