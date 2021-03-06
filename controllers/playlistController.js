const knex = require('../db/connection')


const getAll = (req, res, next) => {
  knex.select('*').from('playlist')
  .then(playlist => res.json({ playlist : playlist }))
}

const getOne = (req, res, next) => {
  id = req.params.id

  knex.select('*').from('playlist')
  .where("playlist.id", id)
  .then(playlist => res.json({ playlist: playlist[0] }))
}

const getByUser = (req, res, next) => {
  id = req.params.id

  knex('users')
  .join('playlist', 'users.id', 'playlist.users_id')
  .join('song', 'song.id', 'playlist.song_id')
  .select('song.id', 'song.URL', 'song.title', 'song.artist', 'slo', 'med', 'fast')
  .then(playlist => res.json({playlist: playlist}))
}

const addSongToList = (req, res, next) => {
  body = req.body

  knex('playlist')
    .insert(body)
    .returning('*')
    .then(updatedList => res.json({ updatedList: updatedList[0]}))
}

const deleteSongFromList = (req, res, next) => {
  id = req.params.id

  knex.select('*').from('playlist')
    .where("song_id", id)
    .delete()
    .returning('*')
    .then(removedSong => res.json({ removedSong: removedSong}))
}

module.exports = {
  getAll,
  getOne,
  getByUser,
  addSongToList,
  deleteSongFromList
} 