const Store = require('./store')

Store.methods(['get', 'post', 'put', 'delete'])
Store.updateOptions({new: true, runValidators: true})

module.exports = Store