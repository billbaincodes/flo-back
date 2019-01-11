
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table.increments()
    table.string("first")
    table.string("last")
    table.string("email")
    table.string("avatarURL")
    table.integer("slow_list_id").references('slow_list.id').unsigned().onDelete('cascade')
    table.integer("med_list_id").references('med_list.id').unsigned().onDelete('cascade')
    table.integer("fast_list_id").references('fast_list.id').unsigned().onDelete('cascade')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users")
}
