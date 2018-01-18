const express = require('express')
//const auth = require('./auth')

module.exports = function (server) {

    //Rotas protegidas por JWT Token.
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    //protectedApi.use(auth)

    //Rota de cadastro de estabelecimentos
    const Store = require('../api/store/storeService')
    Store.register(protectedApi, '/stores')

    //Rota de cadastro de produtos
    const Product = require('../api/product/productService')
    Product.register(protectedApi, '/products')

    //Rotas abertas
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}