
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "med_list"; ALTER SEQUENCE med_list_id_seq RESTART WITH 5;')
    .then(function () {
      // Inserts seed entries
      return knex('character').insert([
        {
          id: 1
        },
        {
          id: 2
        },        
        {
          id: 3
        },
        {
          id: 4
        }
      ]);
    });
};