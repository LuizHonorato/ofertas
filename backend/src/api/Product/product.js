const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, min: 0, required: true},
    old_price: {type: Number, min: 0},
    is_promotion: {type: Boolean, default: false}
})

module.exports = restful.model('Product', productSchema)