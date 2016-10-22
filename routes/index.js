var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

var server = new mongodb.Server('localhost',27017,{auto_reconnect:true});
var db = new mongodb.Db("express",server,{safe:false});
var dataList = '';

//打开数据库连接
db.open(function(err,db){
    if(err){
        console.log(err);
        return false;
    }
    else
        console.log('connect!');
});

/* GET home page. */
router.get('/', function(req, res) {

        //连接到collection
        db.collection('cwc', function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);//错误，返回 err 信息
            }else{
                collection.find().toArray(function(err,docs){
                dataList = docs[0];
                });
            }
        });
        res.render('index',{dataList:dataList.name});
});

module.exports = router;
