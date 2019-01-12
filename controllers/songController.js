const knex = require('../db/connection')


const getAll = (req, res, next) => {
  knex.select('*').from('song')
  .then(song => res.json({ song : song }))
}

const getOne = (req, res, next) => {
  id = req.params.id

  knex.select('*').from('song')
  .where("song.id", id)
  .then(song => res.json({ song: song }))
}

const addSong = (req, res, next) => {
  body = req.body

  knex('song')
    .insert(body)
    .returning('*')
    .then(addedSong => res.json({ addedSong: addedSong}))
}

const deleteSong = (req, res, next) => {
  id = req.params.id

  knex.select('*').from('song')
    .where("id", id)
    .delete()
    .returning('*')
    .then(deletedSong => res.json({ deletedSong: deletedSong}))
}

module.exports = {
  getAll,
  getOne,
  deleteSong,
  addSong
} 