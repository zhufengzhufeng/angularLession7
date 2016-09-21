var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req,res) {
    //将url解析成对象
    var urlObj = url.parse(req.url,true);
    //获取请求路径
    var pathname  = urlObj.pathname;
    if(pathname == '/'){
        fs.createReadStream('./bookstore.html').pipe(res);
    }else{
        //先判断文件是否存在，如果存在则返回文件，不存在返回404
        var flag = fs.existsSync('.'+pathname);
        if(flag){
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode = 404;
            res.end(404);
        }
    }
}).listen(3000);