var express = require('express');
var router = express.Router();
var dbuseinfo = require('../db/dbuseinfo');
/* POST home page. */
router.post('/',function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    dbuseinfo.find({'username':username,'password':password},function(success){
        if(success.length ==0){
            res.send("<script>alert('用户名或者密码错误');location.href='index.html'</script>")
        }else{
            req.session.username = username;
            console.log("登录时保持的username="+req.session.username);
            res.cookie('username',username);
            res.render('index',{'username':username})
        }
    })
});

module.exports = router;
