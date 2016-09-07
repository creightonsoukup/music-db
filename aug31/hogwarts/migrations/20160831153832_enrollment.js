
exports.up = function(knex, Promise) {
  return knex.schema.createTable('enrollment', (table) => {
    table.integer('class_id');
    table.integer('student_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('enrollment');
};
