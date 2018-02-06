const restful = require('node-restful')
const mongoose = restful.mongoose

const storeSchema = new mongoose.Schema({
    store_name: {type: String, required: true},
    company_name: {type: String, required: true},
    cep: {type: String, required: true},
    state: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    address_number: {type: String, required: true},
    complements: {type: String},
    store_telephone: {type: String, required: true},
    store_email: {type: String, required: true},
    contact_name: {type: String, required: true},
    is_active: {type: Boolean, default: true},
    is_favorite: {type: Boolean, default: false}
})

module.exports = restful.model('Store', storeSchema)