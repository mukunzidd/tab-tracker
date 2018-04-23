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
app.get('/status', (req, res) => {
  res.send({
    mesaje: 'Up and running!'
  })
})

// Create an express server
app.listen(process.env.PORT || 8081)
