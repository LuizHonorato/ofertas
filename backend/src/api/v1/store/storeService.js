const Store = require('./store')
const errorHandler = require('../common/errorHandler')

Store.methods(['get', 'post', 'put', 'delete'])
Store.updateOptions({new: true, runValidators: true})
Store.after('post', errorHandler).after('put', errorHandler)

module.exports = Store