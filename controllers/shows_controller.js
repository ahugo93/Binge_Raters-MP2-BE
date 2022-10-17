const express = require('express')
const shows = express.Router()
const TvShow = require('../models/tv-show.js')

// INDEX
shows.get('/', (req, res) => {
  res.send(TvShow)
})

// SHOW
shows.get('/:arrayIndex', (req, res) => {
    res.send(TvShow[req.params.arrayIndex])
  })
  

module.exports = shows
