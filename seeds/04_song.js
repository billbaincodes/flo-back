
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "song"; ALTER SEQUENCE song_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          title: "Walk Like An Egyptian",
          artist: "The Bangles",
          URL: "htttp://google.com",
          list_id: 1
        },
        {
          id: 2,
          title: "Born to Run",
          artist: "Bruce Springsteen",
          URL: "htttp://google.com",
          list_id: 2
        },
        {
          id: 3,
          title: "Take the Money and Run",
          artist: "Steve Miller Band",
          URL: "htttp://google.com",
          list_id: 2
        },
        {
          id: 4,
          title: "Through the Fire and Flames",
          artist: "Dragon Force",
          URL: "htttp://google.com",
          list_id: 3
        },

      ]);
    });
};
