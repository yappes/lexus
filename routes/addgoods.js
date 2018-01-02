var express = require('express');
var router = express.Router();
var dbgoodsinfos = require('../db/dbgoodsinfos');

/* GET home page. */
router.post('/', function(req, res, next) {
    var goodsid = req.body.goodsid;
    var goodsname = req.body.goodsname;
    var goodsprice = req.body.goodsprice;
    var imgfile = req.session.imgfile;
    dbgoodsinfos.save({
        'goodsid':goodsid,
        'goodsname':goodsname,
        'goodsprice':goodsprice,
        'imgfile':imgfile,
    },function(success){
        if(success){
            res.send("<script>alert('保存成功！');location.href='goodslist'</script>")
        }else{
            res.send("<script>alert('保存失败！');location.href='addgoods.html'</script>")
        }
    })
  
});

module.exports = router;
