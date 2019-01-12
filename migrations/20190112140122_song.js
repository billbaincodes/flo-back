
exports.up = function(knex, Promise) {
  return knex.schema.createTable("song", function(table) {
    table.increments()
    table.string("title")
    table.string("artist")
    table.string("URL")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("song")
}
