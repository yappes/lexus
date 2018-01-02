const mongoose = require('mongoose');
const dbconnectgoods = require('./dbconnectgoods');

const db = dbconnectgoods();
var goodsinfosSchema = new mongoose.Schema({
    goodsid:String,
    goodsname:String,
    goodsprice:Number,
    imgfile:String,
})
var goodsinfosModel = db.model('goodsinfos',goodsinfosSchema);

module.exports = {
    'find':function(obj,callback){
        goodsinfosModel.find(obj,function(err,data){
            if(err){
                console.log(err);
                callback([]);
            }else{
                callback(data);
            }
        })
    },
    'add':function(obj,callback){
        var goodsinfosEntity = new goodsinfosModel({
            goodsid:obj.goodsid,
            goodsname:obj.goodsname,
            goodsprice:obj.goodsprice,
            imgfile:obj.imgfile,
        })
        goodsinfosEntity.save(obj,function(err,data){
            if(err){
                console.log(err);
                callback(false);
            }else{
                callback(data)
            }
        })
    },
    'save':function(obj,callback){
        var that = this;
        this.find(obj,function(data){
            if(data.length == 0){
                that.add(obj,function(success){
                    callback(success);
                })
            }else{
                callback(false);
            }
        })
    }
}