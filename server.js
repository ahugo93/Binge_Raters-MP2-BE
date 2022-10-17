// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to Binge Raters!')
})

// SHOWS
const showsController = require('./controllers/shows_controller.js')
app.use('/shows, showsController')

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
