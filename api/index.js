'use strict'
const router = require('express').Router()
const knex = require('../database/mysql')

router.post('/create_url_map', (req, res) => {
  return knex('urls')
    .select('*')
    .where({ link: req.body.url })
    .then(([ row ]) => {
      if (row) return res.status(200).send(row.id)
      else {
        return knex('urls')
          .returning('id')
          .insert({ link: req.body.url })
      }
    })
    .then(([ id ]) => res.status(201).send(id))
    .catch(() => res.status(500).send('server error'))
})

router.get('/get_url/:index', (req, res) => {
  return knex('urls')
    .where({ id: req.params.index })
    .then(([ row ]) => {
      if (row) return res.status(200).send(row)
      else return res.status(404).send('Not Found')
    })
    .catch(() => res.status(500).send('Server error'))
})

router.get('/init', require('./migrations').init)

module.exports = router
