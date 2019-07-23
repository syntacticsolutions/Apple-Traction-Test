const express = require('express')
const app = express()
const port = 9000
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api', require('./api'))

app.use(express.static('dist'))

app.listen(port, () => console.log(`Traction app listening on port ${port}!`))
