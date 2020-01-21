const mongoose = require('../db/connection')

const stopSchema = new mongoose.Schema({
    name: String,
    address: String,
    website: String
})

const Stop = mongoose.model('Stop', stopSchema)

module.exports = Stop