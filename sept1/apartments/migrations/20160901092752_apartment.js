
exports.up = function(knex, Promise) {
  return knex.schema.createTable('apartment', (table) => {
    table.increments('id');
    table.string('address');
    table.integer('number_of_units');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('apartment');
};
