const knex = require('../db/connection')


const getAll = (req, res, next) => {
  knex.select('*').from('users')
  .then(users => res.json({ users : users }))
}

module.exports = {
  getAll
}