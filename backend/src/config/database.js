const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = 'mongodb://localhost/ofertas'

module.exports = mongoose.connect(url, {useMongoClient: true})