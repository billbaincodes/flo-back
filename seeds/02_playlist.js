
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "playlist"; ALTER SEQUENCE playlist_id_seq RESTART WITH 7;')
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
          slo: true,
          med: false,
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
          med: true,
          fast: false,
          users_id: 1,
          song_id: 4
        },
        {
          id: 5,
          slo: false,
          med: false,
          fast: true,
          users_id: 1,
          song_id: 5
        },
        {
          id: 6,
          slo: false,
          med: false,
          fast: true,
          users_id: 1,
          song_id: 6
        },
        {
          id: 7,
          slo: false,
          med: false,
          fast: true,
          users_id: 1,
          song_id: 7
        },
        {
          id: 8,
          slo: false,
          med: false,
          fast: true,
          users_id: 1,
          song_id: 8
        },
        {
          id: 9,
          slo: false,
          med: false,
          fast: true,
          users_id: 1,
          song_id: 9
        }
      ])
    })
}
