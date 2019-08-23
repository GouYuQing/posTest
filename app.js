/*入口文件 */
var express = require('express');
var swig = require('swig');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

// var Goods = require('./models/Goods');
//设置静态文件托管
app.use('/public',express.static(__dirname+'/public'));
//定义模板引擎
app.engine('html',swig.renderFile);
//模板文件存放目录
app.set('views','./views');
app.set('view engine','html');
//相关设置
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/goods',{ useNewUrlParser: true },function(err){
    if(err){
        console.log('数据库连接失败')
    }else{
        console.log('数据库连接成功');

    }
})
  app.all("*",function(req,res,next){
      res.header('Access-Control-Allow-Credentials','true')
    //设置允许跨域的域名，*代表允许任意域名跨域
    // res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Origin",req.headers.origin)
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
});

app.use('/',require('./routers/my'));
//模板文件存放目录

app.listen(5000,function(){
    console.log('running...')
});