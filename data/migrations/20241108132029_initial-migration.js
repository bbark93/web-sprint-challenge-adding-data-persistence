const { table } = require("../dbConfig");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable('project', table => {
        table.increments()
    })
    .createTable('resource', table => {
        table.increments()
    })
    .createTable('task', table => {
        table.increments()
    })
    .createTable('resource_assignment', table => {
        table.increments()
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('resource_assignment')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project');
};
