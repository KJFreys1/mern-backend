const express = require('express')
const router = express.Router()

const Stop = require('../models/Stop')
const Trip = require('../models/Trip')

router.get('/:title', (req, res) => {
    Trip.findOne({title: req.params.title}).then(trip => {
        res.json(trip.stops)
    })
})

router.post('/:title', (req, res) => {
    Trip.findOne({title: req.params.title}).then(trip => {
        Stop.create(req.body).then(stop => {
            trip.stops.push(stop)
        }).then(() => {
            trip.save()
            res.json(trip)
        })
    })
})

router.put('/:title/:name', (req, res) => {
    Trip.findOne({title: req.params.title}).then(trip => {
        Stop.create(req.body).then(stop => {
            let filter = trip.stops.filter(arr => arr.name === req.params.name)
            let index = trip.stops.indexOf(filter[0])
            if (index >= 0) {
                trip.stops.splice(index, 1, stop)
            }
        }).then(() => {
            trip.save(err => console.log(err))
            res.json(trip)
        })
    })
})

router.delete('/:title/:name', (req, res) => {
    Trip.findOne({title: req.params.title}).then(trip => {
        let filter = trip.stops.filter(arr => arr.name != req.params.name)
        trip.stops = filter
        trip.save()
        res.json(trip)
    })
})

module.exports = router