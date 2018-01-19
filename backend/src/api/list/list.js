const restful = require('node-restful')
const mongoose = restful.mongoose

const listSchema = new mongoose.Schema({

})

module.exports = restful.model('List', listSchema)