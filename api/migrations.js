'use strict'
const knex = require('../database/mysql')
const promise = require('bluebird')
const path = require('path')
const fs = require('fs')
require('dotenv').config()
const db = process.env.MYSQL_DB

const replaceAll = function (str, delimiter, replacement) {
  return str.split(delimiter).join(replacement)
}

exports.init = (req, res) => {
  return exports.deleteDatabase()
    .then(() => {
      fs.readdir(
        path.resolve(
          __dirname,
          '../database/migrations'
        ),
        'utf8',
        (err, files) => {
          if (err) throw new Error(err)
          promise.each(files, (fileName) => {
            return new Promise((resolve, reject) => {
              fs.readFile(
                path.resolve(
                  __dirname,
                  `../database/migrations/${fileName}`
                ),
                'utf8',
                (err, sql) => {
                  if (err) reject(err)
                  return knex.raw(replaceAll(sql, '{}', db))
                    .then(() => {
                      resolve()
                    })
                }
              )
            })
          })
            .then(() => {
              return res.status(200).send('ok')
            })
            .catch(err => {
              throw new Error(err)
            })
        }
      )
    })
    .catch(err => {
      throw new Error(err)
    })
}

exports.deleteDatabase = (req, res) => {
  return knex.raw('DROP DATABASE If EXISTS ' + db)
    .then(() => {
      return knex.raw('CREATE DATABASE ' + db)
    })
    .then(() => {
      if (!res) return
      res.status(200).send('DB Deleted and recreated')
    })
}
