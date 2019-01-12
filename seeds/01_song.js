
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "song"; ALTER SEQUENCE song_id_seq RESTART WITH 5;')
    .then(function () {
      // Inserts seed entries
      return knex('song').insert([
        {
          id: 1,
          title: 'Walk Like an Egyptian',
          artist: 'The Bangles',
          URL: 'http://song.com/walk-like-an-egyptian'
        },
        {
          id: 2,
          title: 'I Ran',
          artist: 'A Flock of Seagulls',
          URL: 'http://song.com/i-ran'
        },
        {
          id: 3,
          title: 'Running with the Devil',
          artist: 'Van Halen',
          URL: 'http://song.com/running-with-the-devil'
        },
        {
          id: 4,
          title: 'Born to Run',
          artist: 'Bruce Springsteen',
          URL: 'http://song.com'
        }
      ])
    })
}