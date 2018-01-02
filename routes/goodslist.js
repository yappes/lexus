var express = require('express');
var router = express.Router();
var dbgoodsinfos = require('../db/dbgoodsinfos');

/* GET home page. */
router.get('/', function(req, res, next) {
  var username = req.session.username;
  dbgoodsinfos.find({},function(goodslist){
    // console.log(goodslist)
    res.render('goodslist',{
      'username':username,
      'goodslist':goodslist,
    })
  })
});

module.exports = router;
