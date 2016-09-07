
exports.up = function(knex, Promise) {
  return knex.schema.createTable('class', (table) => {
    table.increments('id');
    table.string('name');
    table.integer('teacher_id');
    table.integer('subject_id');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('class');
};
