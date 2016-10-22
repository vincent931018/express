/**
 * Created by Administrator on 2016/10/22.
 */
var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var bodyParser = require("body-parser");

var server = new mongodb.Server('localhost',27017,{auto_reconnect:true});
var db = new mongodb.Db("express",server,{safe:false});

var resultLength = "";

//打开数据库连接
db.open(function(err,db){
    if(err){
        console.log(err);
        return false;
    }
    else
        console.log('userList connect!');
});

router.get('/userList', function(req, res) {
    var userName = req.query.userName;
    var password = req.query.password;
    //连接到collection
    db.collection('cwc', function (err, collection) {
        if (err) {
            mongodb.close();
            return callback(err);//错误，返回 err 信息
        }else{
            var tmp = {"userName": userName,"password":password};
            collection.find(tmp).toArray(function (err, result) {
                resultLength = result.length;
                if(resultLength == 0){
                    res.json({success:false,result:result});
                }else{
                    res.json({success:true,result:result});
                }
            });
        }
    });
});

module.exports = router;