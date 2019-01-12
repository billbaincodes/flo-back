const knex = require('../db/connection')


const getAll = (req, res, next) => {
  knex.select('*').from('users')
  .then(users => res.json({ users : users }))
}

const getOne = (req, res, next) => {
  id = req.params.id

  knex.select('*').from('users')
  .where("users.id", id)
  .then(users => res.json({ users: users }))
}


module.exports = {
  getAll,
  getOne
} 