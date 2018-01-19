const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, min: 6, max: 12, required: true},
    telephone: {type: String, required: true}
})

const productSchema = new mongoose.Schema({
    product_name: {type: String, required: true},
    price: {type: Number, min: 0, required: true},
    old_price: {type: Number, min: 0},
    is_promotion: {type: Boolean, default: false}
})

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

const User = restful.model('User', userSchema)
const Product = restful.model('Product', productSchema)
const Store = restful.model('Store', storeSchema)

module.exports = User, Product, Store




