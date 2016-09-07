
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('unit').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('unit').insert({unit_number:'5464',bedrooms:'3',apartment_id:'1'}),
        knex('unit').insert({unit_number:'3454',bedrooms:'3',apartment_id:'1'}),
        knex('unit').insert({unit_number:'4325',bedrooms:'3',apartment_id:'1'})
      ]);
    });
};
