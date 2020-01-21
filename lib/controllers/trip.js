const express = require('express')
const router = express.Router()

const Trip = require('../models/Trip')

router.get('/', (req, res) => {
    Trip.find({}).then(trip => {
        res.json(trip)
    })
})

router.get('/:title', (req, res) => {
    Trip.findOne({title: req.params.title}).then(trip => {
        res.json(trip)
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