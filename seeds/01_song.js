
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "song"; ALTER SEQUENCE song_id_seq RESTART WITH 7;')
    .then(function () {
      // Inserts seed entries
      return knex('song').insert([
        {
          id: 1,
          title: 'Hello',
          artist: 'Lionel Richie',
          URL: 'http://song.com/hello'
        },
        {
          id: 2,
          title: 'Only Time',
          artist: 'Enya',
          URL: 'http://song.com/only-time'
        },
        {
          id: 3,
          title: 'Hallelujah',
          artist: 'Jeff Buckley',
          URL: 'http://song.com/hallelujah'
        },
        {
          id: 4,
          title: 'Running with the Devil',
          artist: 'Van Halen',
          URL: 'http://song.com/running-with-the-devil'
        },
        {
          id: 5,
          title: 'Born to Run',
          artist: 'Bruce Springsteen',
          URL: 'http://song.com/born-to-run'
        },
        {
          id: 6,
          title: 'I Ran',
          artist: 'A Flock of Seagulls',
          URL: 'http://song.com/i-ran'
        },
        {
          id: 7,
          title: 'Master of Puppets',
          artist: 'Metallica',
          URL: 'http://song.com/master-of-puppets'
        },
        {
          id: 8,
          title: 'First of the Year',
          artist: 'Skrillex',
          URL: 'http://song.com/first-of-the-year'
        },
        {
          id: 9,
          title: 'Tornado of Souls',
          artist: 'Megadeth',
          URL: 'http://song.com/tornado-of-souls'
        }
      ])
    })
}