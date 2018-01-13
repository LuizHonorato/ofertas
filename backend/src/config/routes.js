const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    //Rotas protegidas por JWT Token.
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    //Rota de cadastro de estabelecimentos
    const Store = require('../api/store/storeService')
    Store.register(protectedApi, './stores')

    //Rota de cadastro de produtos
    const Product = require('../api/product/productService')
    Product.register(protectedApi, './products')
}