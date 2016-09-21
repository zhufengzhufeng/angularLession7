var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = {
    '.js':'application/javascript',
    '.css':'text/css'
};
var books = [
    {name:'nodejs',price:40,id:1,count:1},
    {name:'angularjs',price:20,id:2,count:1},
    {name:'vuejs',price:30,id:3,count:1},
    {name:'reactjs',price:10,id:4,count:1},
];
http.createServer(function (req,res) {
    //将url解析成对象
    var urlObj = url.parse(req.url,true);
    //获取请求路径
    var pathname  = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./bookstore.html').pipe(res);
    }else if(pathname == '/book'){
        res.end(JSON.stringify(books));
    }else{
        //先判断文件是否存在，如果存在则返回文件，不存在返回404
        var flag = fs.existsSync('.'+pathname);
        if(flag){
            res.setHeader('Content-Type',mime[path.extname(pathname)]+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode = 404;
            res.end('404');
        }
    }
}).listen(3000);