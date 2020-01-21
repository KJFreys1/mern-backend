const express = require('express')
const router = express.Router()

const Stop = require('../models/Stop')
const Trip = require('../models/Trip')

router.get('/', (req, res) => {
    Stop.find({}).then(stop => {
        res.json(stop)
    })
})

router.get('/:title', (req, res) => {
    Stop.findOne({title: req.params.title}).then(stop => {
        res.json(stop)
    })
})

router.post('/', (req, res) => {
    Trip.create(req.body).then(() => {
        Trip.find({}).then(trip => {
            res.json(trip)
        })
    })
})

router.put('/title', (req, res) => {
    Trip.findOneAndUpdate(
        { title: req.params.title },
        req.body
    ).then(() => {
        Trip.find({}).then(trip => {
            res.json(Trip)
        })
    })
})

router.delete('/:title', (req, res) => {
    Trip.findOneAndDelete({title: req.params.title}).then(() => {
        Trip.find({}).then(trip => {
            res.json(trip)
        })
    })
})

module.exports = router