const router = require('express').Router()
const fs = require('fs')
const path = require('path')

router.post('/create_url_map', (req, res) => {
  fs.readFile(path.join(__dirname, 'routeMap.json'), 'utf-8', (err, data) => {
    if (err) throw err
    let map = JSON.parse(data)
    if (map[req.body.url]) {
      return res.status(200).send(map[req.body.url])
    }
    map[req.body.url] = Object.values(map).length

    fs.writeFile(
      path.join(__dirname, 'routeMap.json'),
      JSON.stringify(map),
      (err) => {
        if (err) throw err

        return res.status(201).json(map[req.body.url])
      }
    )
  })
})

router.get('/get_url/:index', (req, res) => {
  fs.readFile(path.join(__dirname, 'routeMap.json'), 'utf-8', (err, data) => {
    if (err) throw err
    let map = JSON.parse(data)
    let url = Object.entries(map).find(([key, val]) => val === parseInt(req.params.index))[0]

    return res.status(200).send(url)
  })
})

module.exports = router
