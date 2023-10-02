/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('todo', (table) => {
    table.increments('id')
    table.string('title', 50)
    table.string('description', 500)
    table.boolean('is_favorite')
    table.enum('status', ['todo', 'doing', 'done'])
    table.string('container_color', 10)
    table.datetime('created_at')
    table.datetime('updated_at')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('todo')
}
