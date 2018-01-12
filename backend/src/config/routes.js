const express = require('express')

module.exports = function(server) {

    //URL base para todas as rotas do backend.
    const router = express.Router()
    server.use('/api', router)

    //Rota de cadastro de estabelecimentos
    const Store = require('../api/Store/StoreService')
    Store.register(router, './stores')

    //Rota de cadastro de produtos
    const Product = require('../api/Product/ProductService')
    Product.register(router, './products')
}