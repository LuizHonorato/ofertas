const restful = require('node-restful')
const mongoose = restful.mongoose

const storeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    company_name: {type: String, required: true},
    address: {type: String, required: true},
    telephone: {type: String, required: true},
    email: {type: String, required: true},
    contact_name: {type: String, required: true}
})

module.exports = restful.model('Store', storeSchema)