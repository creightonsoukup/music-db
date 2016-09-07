
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activity').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('activity').insert({
          id: 1,
          location: 'confluence park',
          name: 'frisbee',
          duration: 60,
          is_free: true
        }),
        knex('activity').insert({
          id: 2,
          location: 'Cherry Creek Golf Club',
          name: 'golf',
          duration: 240,
          is_free: true
        }),
        knex('activity').insert({
          id: 3,
          location: 'north table mountain',
          name: 'hiking',
          duration: 7,
          is_free: true
        })
      ]);
    });
};
