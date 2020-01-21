const Trip = require('../models/Trip')
const data = require('./seed.json')

Trip.deleteMany({}).then(() => {
    Trip.collection.insert(data).then(trips => {
        console.log(trips)
    }).catch(err => {
        console.log(err)
    })
})