var express = require('express');
var router = express.Router();
var Goods = require('../models/Goods');

router.get('/getData',function(req,res){
    Goods.find()
    .then(data=>{
        console.log(data);
        console.log('hhhh');
        console.log(data[0]);
        res.send(data);
    })

    
})
module.exports = router;