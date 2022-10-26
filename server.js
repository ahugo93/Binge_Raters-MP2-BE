// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.json())


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to Binge Raters!')
})

//CONTROLLER
const showsController = require('./controllers/shows_controller.js')
app.use('/shows', showsController)

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
