const ListShop = require('./listShop')
const errorHandler = require('../common/errorHandler')

ListShop.methods(['get', 'post', 'put', 'delete'])
ListShop.updateOptions({new: true, runValidators: true})
ListShop.after('post', errorHandler).after('put', errorHandler)

module.exports = ListShop