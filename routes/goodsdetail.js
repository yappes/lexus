var express = require('express');
var router = express.Router();
var dbgoodsinfos = require('../db/dbgoodsinfos');
var dbcomments = require('../db/dbcomments');

/* GET home page. */
router.get('/', function(req, res, next) {
  var goodsid = req.query.goodsid;
  var username = req.session.username;
  dbgoodsinfos.find({'goodsid':goodsid},function(goodslist){
    // console.log(goodslist)
    dbcomments.find(goodsid,function(comments){
      // console.log(comments)
        res.render('goodsdetail',{
          'username':username,
          'comments':comments,
          'goodsdetail':goodslist[0],
        })
    })   
  })
});

module.exports = router;