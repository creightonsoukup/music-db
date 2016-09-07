
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tenant_unit', (table) => {
    table.integer('tenant_id');
    table.integer('unit_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tenant_unit');
};
