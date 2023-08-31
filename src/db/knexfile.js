// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'database_mysql',
      port: 3306,
      user: "root",
      password: '1q2w3e4r',
      database: 'my_database',
      seeds: {
        directory: './seeds'
      }
    }
  },
};
