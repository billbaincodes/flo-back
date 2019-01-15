const knex = require('../db/connection')


const getAll = (req, res, next) => {
  knex.select('*').from('playlist')
  .then(playlist => res.json({ playlist : playlist }))
}

const getOne = (req, res, next) => {
  id = req.params.id

  knex.select('*').from('playlist')
  .where("playlist.id", id)
  .then(playlist => res.json({ playlist: playlist }))
}

const getByUser = (req, res, next) => {
  id = req.params.id

  knex('users')
  .join('playlist', 'users.id', 'playlist.users_id')
  .join('song', 'song.id', 'playlist.song_id')
  .select('song.URL', 'song.title', 'song.artist', 'slo', 'med', 'fast')
  .then(playlist => res.json({playlist: playlist}))
}

module.exports = {
  getAll,
  getOne,
  getByUser
} 