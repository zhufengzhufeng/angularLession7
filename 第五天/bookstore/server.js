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
    }else if(/^\/book(\/\d+)?/.test(pathname)){  // /book/12
        //正则
        var method = req.method;
        var matcher = pathname.match(/\/book\/(\d+)/);
        //来判断是否传入id
        switch (method){
            case 'GET':
                if(matcher){
                    //可以获取id matcher[1]
                    var id = matcher[1];
                    var book = books.find(function (item) {
                        if(item.id == id){ //当id相同时返回查到的那一项
                            return item;
                        }
                    });//如果相等返回插到的那一项
                    res.end(JSON.stringify(book));
                }else{
                    res.end(JSON.stringify(books));
                }
                break;
            case 'DELETE':
                if(matcher){
                    setTimeout(function () {
                        var id = matcher[1];
                        books = books.filter(function (item) {
                            return item.id!=id;
                        });
                        res.end(JSON.stringify({}));//删除后返回空对象
                    },1000);
                }else{
                    books = [];
                    res.end(JSON.stringify({}));
                }
                break;
            case 'PUT':
                if(matcher){
                    var id = matcher[1];
                    //获取请求体中的内容
                    var result = '';
                    req.on('data',function (data) {
                        result+=data;
                    });
                    req.on('end',function () {
                        var newBook = JSON.parse(result);
                        //用新书替换旧书
                        books = books.map(function (item) {
                            if(item.id == id){
                                return newBook;
                            }
                            return item;
                        });
                        //修改后返回修改的对象
                        res.end(JSON.stringify(newBook));
                    });
                }else{

                }
                break;
            case 'POST':
                //增加图书
                break;
        }







        //如果匹配成功 判断有没有id,判断方法



        //res.end(JSON.stringify(books));
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