const mongoose = require('../db/connection')

const stopSchema = new mongoose.Schema({
    name: String,
    address: String,
    website: String
})

const tripSchema = new mongoose.Schema({
    title: String,
    stops: [stopSchema]
})

const Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip