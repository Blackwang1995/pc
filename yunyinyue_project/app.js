const express =require("express");
var app = express();
var bodyParser = require("body-parser");
var server = app.listen(3000);

//使用bodyParser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源
app.use(express.static('public'));