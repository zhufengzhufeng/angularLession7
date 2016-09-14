//通过模块来获得注射器，还要通过模块创建服务，模块是一个构造函数
function Module(){

}
Module.prototype.provider = function () {
    
};
Module.prototype.injector = function () {
    var injector = {};
    //推断参数列变
    injector.annotate = function () {
        
    };
    //获取服务
    injector.get = function () {
        
    };
    //是否包含服务
    injector.has = function () {
        
    };
    //推断服务，并获取服务，在调用服务
    injector.invoke = function () {
        
    };
    //实例化方法
    injector.instantiate = function () {
        
    };
    return injector;
};
var app = new Module();
app.provider('hello',function () {
    this.$get = function () {
        return {name:1,age:2,address:3}
    }
});
var injector = app.injector();