require('dotenv').config()

let config = {
  client: 'mysql2',
  connection: {
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    host: 'localhost',
    port: 3306,
    multipleStatements: true
  },
  pool: { min: 0, max: 7 }
}

module.exports = require('knex')(config)
