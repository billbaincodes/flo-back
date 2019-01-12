
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "users"; ALTER SEQUENCE users_id_seq RESTART WITH 2;')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first: 'Donnie',
          last: 'Denver',
          email: 'donnie@gmail.com',
          pass: '1234',
          avatarURL: "https://vignette.wikia.nocookie.net/twinpeaks/images/c/cd/LelandPalmer.jpg/revision/latest/scale-to-width-down/350?cb=20160816065237"
        }
      ])
    })
}
