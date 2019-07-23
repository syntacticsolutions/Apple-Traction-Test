require('dotenv').config()

let config = {
  client: 'mysql2',
  connection: {
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    host: 'localhost',
    port: 3306,
    multipleStatements: true
  }
}

module.exports = require('knex')(config)
