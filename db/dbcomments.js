const mongoose = require('mongoose');
const dbconnectgoods = require('./dbconnectgoods');

const db = dbconnectgoods();
var commentsSchema = new mongoose.Schema({
    goodsid:String,
    comment:String,
    username:String,
    time:Date,
})
var commentsModel = db.model('comments',commentsSchema);

module.exports = {
    'add':function(obj,callback){
        var commentsEntity = new commentsModel({
            goodsid:obj.goodsid,
            comment:obj.comment,
            username:obj.username,
            time:obj.time
        })
        commentsEntity.save(obj,function(err,data){
            if(err){
                console.log(err);
                callback(false);
            }else{
                callback(data)
            }
        })
    },
    'find':function(goodsid,callback){
        commentsModel.find({'goodsid':goodsid},function(err,data){
            if(err){
                console.log(err);
                callback([]);
            }else{
                callback(data);
            }
        })
    },
}