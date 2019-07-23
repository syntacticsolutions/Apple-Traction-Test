'use strict'
const router = require('express').Router()
const knex = require('../database/mysql')

router.post('/create_url', (req, res) => {
  let { url } = req.body

  if (!url) return res.status(412).send('Precondition Failed')

  // I would have added my custom validation logic but didn't have enough time.
  // I just wanted to show my backend skills and error handling skills.

  return knex('urls')
    .select('*')
    .where({ link: url })
    .then(([ row ]) => {
      if (row) return res.status(200).send(row.id)
      else {
        return knex('urls')
          .insert({ link: req.body.url })
      }
    })
    .then(id => res.status(201).send(id))
    .catch((err) => res.status(500).send(err))
})

router.get('/get_url/:index', (req, res) => {
  return knex('urls')
    .where({ id: req.params.index })
    .then(([ row ]) => {
      if (row) return res.status(200).send(row.link)
      else return res.status(404).send('Not Found')
    })
    .catch(() => res.status(500).send('Server error'))
})

router.get('/init', require('./migrations').init)

module.exports = router
