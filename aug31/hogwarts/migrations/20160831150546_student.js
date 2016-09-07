
exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', (table) => {
    table.increments('id');
    table.string('name');
    table.string('house_id');
    table.string('year');
    table.string('patronus');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('student');
};
