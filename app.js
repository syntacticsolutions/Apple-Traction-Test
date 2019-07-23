const express = require('express')
const app = express()
const port = 9000
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api', require('./api'))

app.use(express.static('dist'))

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, './dist/index.html')))

app.listen(port, () => console.log(`Traction app listening on port ${port}!`))
