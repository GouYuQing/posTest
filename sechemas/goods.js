var mongoose = require('mongoose');
//商品表结构

module.exports = new mongoose.Schema({
    goodsId:Number,
    goodsName:String,
    price:Number
})