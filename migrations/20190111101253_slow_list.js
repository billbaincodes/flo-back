
exports.up = function(knex, Promise) {
  return knex.schema.createTable("slow_list", function(table) {
    table.increments()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("slow_list")
}