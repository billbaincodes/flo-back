
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
          URL: 'http://song.com/walk-like-an-egyptian'
        },
        {
          id: 2,
          title: 'Only Time',
          artist: 'Johnny Cash',
          URL: 'http://song.com/i-walk-the-line'
        },
        {
          id: 3,
          title: 'Hallelujah',
          artist: 'Leonard Cohen',
          URL: 'http://song.com/i-ran'
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
          title: 'Too Fast for Love',
          artist: 'Mötley Crüe',
          URL: 'http://song.com/too-fast-for-love'
        },
        {
          id: 7,
          title: 'Tornado of Souls',
          artist: 'Megadeth',
          URL: 'http://song.com/tornado-of-souls'
        },
        {
          id: 8,
          title: 'First of the Year',
          artist: 'Skrillex',
          URL: 'http://song.com/first-of-the-year'
        },
        {
          id: 9,
          title: 'Mouth for War',
          artist: 'Pantera',
          URL: 'http://song.com/mouth-for-war'
        }
      ])
    })
}