
exports.up = function(knex, Promise) {
  return knex.schema.createTable('house', (table) => {
    table.increments('id');
    table.string('name');
    table.string('description');
    table.string('location');
    table.integer('house_head_id')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('house');
};
