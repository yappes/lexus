var express = require('express');
var router = express.Router();
var dbuseinfo = require('../db/dbuseinfo');
/* POST home page. */
router.post('/',function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username,password)
    dbuseinfo.reg({'username':username,'password':password},function(success){
        if(success){
            res.send("<script>location.href='index.html';$('.LoginPopup').css('display','block')</script>")
        }else{
            res.send("<script>alert('用户名已注册');location.href='index.html'</script>")
        }
    })
});

module.exports = router;
