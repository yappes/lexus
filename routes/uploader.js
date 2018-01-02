var express = require('express');
var formidable = require("formidable");
var router = express.Router();
var fs = require("fs");
var path = require("path");

router.post('/',function(req, res, next){
    //创建一个表单对象（formidable模块创建）
    var form = new formidable.IncomingForm();
    //编码
    form.encoding = "utf-8";
    //本地保存的路径
    form.uploadDir = "../public/images";
    //是否保存扩展名
    form.keepExtensions = true;
    //文件大小
    form.maxFieldsSize = 3*1024*1024;
    //接到前端传来的文件，进行处理
    form.parse(req, function(err, fields, files) {
        //错误信息的处理
        if (err) {
            res.locals.error = err;
            res.render('index', {title: TITLE});
            return;
        }
        console.log(files.pic);
        //判断文件扩展名是否是支持的（jpg和png）
        var extName = ''; //后缀名
        switch (files.pic.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if(extName.length == 0) {
            res.locals.error = '只支持png和jpg格式图片';
            res.render('index', {title: TITLE});
            return;
        }

        var imgFileName = Math.random() + '.' + extName;//文件名（用随机数，最好用当前时间）
        //图片写入地址；
        var newPath = path.normalize(form.uploadDir +"/"+ imgFileName);
        console.log("newPath="+newPath);
        // 显示地址；
        var showUrl = "http://localhost:706" + "upload"+ imgFileName ;
        fs.renameSync(files.pic.path, newPath); //重命名
        res.json({
            "newPath":showUrl
        });
        let sendimgpath = path.normalize("uploader/"+imgFileName);
        console.log("sendimgpath="+sendimgpath);
        req.session.imgfile = sendimgpath;
        res.render("showimg",{"imgfile":sendimgpath});
    })
});
module.exports = router;