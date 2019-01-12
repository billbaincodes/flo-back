
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "playlist"; ALTER SEQUENCE playlist_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('playlist').insert([
        {
          id: 1,
          slo: true,
          med: false,
          fast: false,
          users_id: 1,
          song_id: 1
        },
        {
          id: 2,
          slo: false,
          med: true,
          fast: false,
          users_id: 1,
          song_id: 2
        },
        {
          id: 3,
          slo: false,
          med: true,
          fast: false,
          users_id: 1,
          song_id: 3
        },
        {
          id: 4,
          slo: false,
          med: false,
          fast: true,
          users_id: 1,
          song_id: 4
        },
      ])
    })
}
