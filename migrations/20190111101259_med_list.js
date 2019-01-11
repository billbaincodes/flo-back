
exports.up = function(knex, Promise) {
  return knex.schema.createTable("med_list", function(table) {
    table.increments()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("med_list")
}