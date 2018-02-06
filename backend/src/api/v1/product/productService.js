const Product = require('./product')
const errorHandler = require('../common/errorHandler')

Product.methods(['get', 'post', 'put', 'delete'])
Product.updateOptions({new: true, runValidators: true})
Product.after('post', errorHandler).after('put', errorHandler)

//Esse método retorna uma rota que informa a quantidade de produtos cadastradas.
Product.route('count', (req, res, next) => {
    Product.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

//Esse método retorna uma rota com uma query obtendo os produtos setados com promoção na base de dados.
Product.route('promos', (req, res, next) => {
    Product.find({is_promotion: true}, (error, promos) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({promos})
        }
    })

})

module.exports = Product