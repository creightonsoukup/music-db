
exports.up = function(knex, Promise) {
  return knex.schema.createTable('unit', (table) => {
    table.increments();
    table.integer('unit_number');
    table.integer('bedrooms');
    table.integer('apartment_id')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('unit');
};
