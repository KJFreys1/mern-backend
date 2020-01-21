const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/trips', { useNewUrlParser: true })
module.exports = mongoose