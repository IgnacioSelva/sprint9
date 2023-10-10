
  const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 5432,
      user : 'postgres',
      password : 'paloma2223',
      database : 'sprint9'
    }
  });

module.exports = knex