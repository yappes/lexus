var express = require('express');
var router = express.Router();
var dbcomments = require('../db/dbcomments');

/* GET home page. */
router.post('/', function(req, res, next) {
    var goodsid = req.body.goodsid;
    var comment = req.body.comment;
    var username = req.session.username;
    var time = new Date();

    console.log("获取session中的username="+req.session.username)
    dbcomments.add({
        goodsid:goodsid,
        comment:comment,
        username:username,
        time:time
    },function(success){
        if(success){
            console.log('保存成功')
            res.redirect("goodsdetail?goodsid="+goodsid);
        }else{
            console.log('保存失败')
            res.end();
        }
    })
});

module.exports = router;