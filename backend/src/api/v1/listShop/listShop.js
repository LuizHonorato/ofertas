const restful = require('node-restful')
const mongoose = restful.mongoose
const userSchema = require('../user/user').userSchema
const storeSchema = require('../store/store').storeSchema
const productSchema = require('../product/product').productSchema


const listShopSchema = new mongoose.Schema({
    list_name: {type: String, default: "Nova lista"},
    list_date: {type: Date, default: Date.now},
    user: [userSchema],
    store: [storeSchema],
    products: [productSchema]
})

module.exports = restful.model('List', listShopSchema)




