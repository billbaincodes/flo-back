
exports.up = function(knex, Promise) {
  return knex.schema.createTable("fast_list", function(table) {
    table.increments()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("fast_list")
}