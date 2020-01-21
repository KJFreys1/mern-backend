const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

const tripController = require('./controllers/trip')
const stopController = require('./controllers/stop')

app.use('/trips', tripController)
app.use('/stops', stopController)

app.listen(3000, () => console.log('listening on port 3000'))