var mongoose = require('mongoose');
var goodsSechema = require('../sechemas/goods');

module.exports = mongoose.model('Goods',goodsSechema);