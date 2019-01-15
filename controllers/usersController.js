const knex = require("../db/connection");

const getAll = (req, res, next) => {
  knex
    .select("*")
    .from("users")
    .then(users => res.json({ users: users }));
};

const getOne = (req, res, next) => {
  id = req.params.id;

  knex
    .select("*")
    .from("users")
    .where("users.id", id)
    .then(users => res.json({ users: users[0] }));
};

const newUser = (req, res, next) => {
  body = req.body;

  knex("users")
    .insert(body)
    .returning("*")
    .then(newUser => res.json({ newUser: newUser[0] }));
};

const deleteUser = (req, res, next) => {
  id = req.params.id;

  knex("users")
    .select("*")
    .where("id", id)
    .delete()
    .returning("*")
    .then(deletedUser => res.json({ deletedUser: deletedUser[0] }));
};

const updateUser = (req, res, next) => {
  let body = req.body;
  let id = req.params.id;

  return knex("users")
    .where("id", id)
    .update(body)
    .returning("*")
    .then(updatedUser => {
      res.json({ updatedUser: updatedUser[0] });
    });
};

module.exports = {
  getAll,
  getOne,
  newUser,
  deleteUser,
  updateUser
};
