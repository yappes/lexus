const mongoose = require('mongoose');
const dbconnect = require('./dbconnect');
var odb = dbconnect();
var useinfoSchema = new mongoose.Schema({
    'username':String,
    'password':String,
})
var useinfoModel = odb.model('students',useinfoSchema);

module.exports = {
    'find':function(obj,callback){
        useinfoModel.find(obj,function(err,data){
            if(err){
                console.log(err);
                callback([]);
            }else{
                callback(data);
            }
        })
    },
    'add':function(obj,callback){
        var useinfoEntity = new useinfoModel(obj)
        useinfoEntity.save(function(err,data){
            if(err){
                console.log(err);
                callback(false);
            }else{
                callback(true);
            }
        })
    },
    'reg':function(obj,callback){
        var that = this;
        this.find(obj,function(userinfo){
            if(userinfo.length ==0){
                that.add(obj,function(success){
                    callback(success);
                });
            }else{
                callback(false)
            }
        })
    },
}