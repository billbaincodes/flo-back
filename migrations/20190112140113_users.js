
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table.increments()
    table.string("first")
    table.string("last")
    table.string("email")
    table.string("pass")
    table.string("avatarURL")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users")
}
