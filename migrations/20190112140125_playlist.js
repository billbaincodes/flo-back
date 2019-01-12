
exports.up = function(knex, Promise) {
  return knex.schema.createTable("playlist", function(table) {
    table.increments()
    table.boolean("slo")
    table.boolean("med")
    table.boolean("fast")
    table.integer("users_id").references('users.id').unsigned().onDelete('cascade')
    table.integer("song_id").references('song.id').unsigned().onDelete('cascade')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("playlist")
}