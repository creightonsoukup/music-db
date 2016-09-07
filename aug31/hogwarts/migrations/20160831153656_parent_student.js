
exports.up = function(knex, Promise) {
  return knex.schema.createTable('parent_student', (table) => {
    table.integer('student_id');
    table.integer('parent_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('parent_student');
};
