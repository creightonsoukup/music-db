
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tenant_unit').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tenant_unit').insert({name: 'creighton' ),
        knex('tenant_unit').insert({name: 'creighton' ),
        knex('tenant_unit').insert({name: 'creighton' )
      ]);
    });
};
