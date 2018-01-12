const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    //Rotas protegidas por JWT Token.
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    //Rota de cadastro de estabelecimentos
    const Store = require('../api/Store/StoreService')
    Store.register(protectedApi, './stores')

    //Rota de cadastro de produtos
    const Product = require('../api/Product/ProductService')
    Product.register(protectedApi, './products')
}