const express = require('express')
const shows = express.Router()
const tvShow = require('../models/tv-show.js')


// INDEX ALL
shows.get('/', async (req, res) => {
  try {
    const allShows = await tvShow.find()
    res.json(allShows)
  } catch (err) {
    res.status(500).json({ mesasge: 'An error has occured, could not get tv show'})
  }
  // res.send(tvShow)
})


//INDEX ONE
shows.get('/:id', getTvShow, (req, res) => {
  res.json(res.show)
})


//CREATE ONE
shows.post('/', async (req, res) => {
  const show = new tvShow({
    tv_id: req.body.tv_id,
    name: req.body.name,
    genres: req.body.genres,
    first_air_date: req.body.first_air_date,
    number_of_seasons: req.body.number_of_seasons,
    number_of_episodes: req.body.number_of_episodes,
    poster_path: req.body.poster_path
  })
  try{
    const newShow = await show.save()
    res.status(200).json(newShow)
  } catch (err) {
    res.status(400).json({ mesasge: 'An error has occured, could not add tv show'})
  }
})


//UPDATE ONE
shows.patch('/:id', getTvShow, async (req, res) => {
  if (req.body.name != null) {
    res.show.name = req.body.name
  }
  if (req.body.genres != null) {
    res.show.genres = req.body.genres
  }
  if (req.body.first_air_date != null) {
    res.show.first_air_date = req.body.first_air_date
  }
  if (req.body.number_of_seasons != null) {
    res.show.number_of_seasons = req.body.number_of_seasons
  }
  if (req.body.number_of_episodes != null) {
    res.show.number_of_episodes = req.body.number_of_episodes
  }
  try {
    const revisedTvShow = await res.show.save()
    res.json(revisedTvShow)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
 
})


//DELETE ONE
shows.delete('/:id', getTvShow, async (req, res) => {
  try {
    await res.show.remove()
    res.json({ message: 'deleted tv show'})
  } catch (err) {
    res.status(500).json({message: err.message}) 
  }
})

  
async function getTvShow(req, res, next) {
  let show 
  try{
    show = await tvShow.findById(req.params.id)
    if (show == null) {
      return res.status(404).json({ message: 'cannot find tv show'})
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.show = show
  next()
}


module.exports = shows