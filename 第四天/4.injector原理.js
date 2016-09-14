//通过模块来获得注射器，还要通过模块创建服务，模块是一个构造函数
function Module(){
    this.providers = {};
}
Module.prototype.provider = function (serviceName,constructor) {
    //每当创建一个服务 就要放在对应模块下的药箱里
    this.providers[serviceName] = constructor;
    //相当于把一种药放进去了
};
Module.prototype.injector = function () {
    var injector = {cache:{}};//cache用来保证服务的唯一性
    var that = this;
    //推断参数列变
    injector.annotate = function (fn) {
        //第一次匹配出函数的所有参数，通过参数用 ( , )去分割每一个参数
        //hello ,my, app ,qq , cc
        //[hello,my,app,qq,cc]
        return  fn.toString().match(/function\s+\((.*)\)/)[1].replace(/\s+/g,'').split(',');
    };
    //获取服务
    injector.get = function (serviceName) {
        //先判断缓存中是否声明这样一个服务
        var service = this.cache[serviceName];
        if(!service){ //如果没有这个服务，创建这个服务
            var instant = new that.providers[serviceName];
            //调用$get方法
            service = instant.$get();
            //放到缓存中，方便下次获取直接返回
            this.cache[serviceName] = service;
        }
        //先取出服务对应的构造函数
        return service;
    };
    //是否包含服务
    injector.has = function (serviceName) {
        return that.providers[serviceName]?true:false
    };
    //推断服务，并获取服务，在调用服务
    injector.invoke = function (fn,thisObj) {
        //推断传入了几个服务
        var args = this.annotate(fn);
        var arr = []; //存放所有的实例
        if(args[0]!=''){
            //通过服务列表获取每一个服务的实例的$get方法，调用get方法
            for(var i = 0;i<args.length;i++){
                arr.push(this.get(args[i]));
            }
        }
        fn.apply(thisObj,arr);//调用这个函数，把实例的列表一一传入，
        return thisObj;
    };
    //实例化方法
    injector.instantiate = function (fn) {
        console.log(fn.prototype);
        return this.invoke(fn,fn.prototype);
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
var arr = injector.annotate(function ( hello ,my, app ,qq , cc) {});
console.log(arr);
var hello = injector.get('hello');
var hello1 = injector.get('hello');
console.log(hello==hello1);
console.log(injector.has('hello1'));
injector.invoke(function () {
    console.log(hello);
},1);

var obj = injector.instantiate(function (hello) {
    this.hello = 'zfpx';
    this.hy = '8'
});
console.log(obj);


