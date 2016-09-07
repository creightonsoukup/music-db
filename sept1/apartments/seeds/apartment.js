
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('apartment').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('apartment').insert({address: 'fake address 5', number_of_units: '1343',}),
        knex('apartment').insert({address: 'fake address 3', number_of_units: '4353'}),
        knex('apartment').insert({address: 'fake address 2', number_of_units: '4354'})
      ]);
    });
};
