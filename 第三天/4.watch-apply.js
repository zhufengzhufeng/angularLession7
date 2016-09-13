//脏值检查是因为保存了上一次的值，当调用$apply时，获取最新的值如果发生变化，刷新视图
function Scope() {
    this.$$watchers = [];
}
Scope.prototype.$apply   = function () {
    this.$digest();
};
Scope.prototype.$digest = function () { //脏值检查当值发生变化时至少执行两次
    var dirty = '';
    var count = 10;
    do{
        //先来一次只要有值脏了，就在查一次
        dirty = this.$digestOne();// 执行一次后要返回是否有脏值，有脏值继续调用$digestOne方法
        if(count==0&&dirty){
            throw new Error('10 $digest() iterations reached. Aborting!');
        }
    }while (dirty&&count--);//当值为脏时，并且循环没有小于10次，继续检查
};
Scope.prototype.$watch = function (exp,fn) {
    //将每一个监听者放到数组中，以便于我们做脏值检查
    this.$$watchers.push({
        exp:exp,
        fn:fn,
        last:this[exp]
    });
};
Scope.prototype.$digestOne = function () {
    var that = this;
    var dirty = false;//默认为不脏
    //我们要取作用域上的所有新值和观察者中的每一个老值进行比较，如果不相等刷新视图
    this.$$watchers.forEach(function (watcher) {
        var oldVal = watcher.last;
        var newVal = that[watcher.exp];
        if(oldVal != newVal){
            //执行观察者的函数，将老值替换成新值
            watcher.fn(newVal,oldVal);
            watcher.last = newVal;
            dirty = true;
        }
    });
    return dirty
};
var scope = new Scope();
scope.name = 100;
scope.age = 100;
scope.$watch('name',function (newVal,oldVal) {
    scope.age = Math.random();
    console.log(scope.age);
});
scope.$watch('age',function () {
    scope.name = Math.random();
    console.log(scope.name);
});
scope.name = 200;
scope.$apply();

//脏值检查，至少要执行两次，因为当别人的数据发生变化时，可能在其回调函数内影响了其他人的变化，此时代码执行完后之刷新了更改的值，没有管回调函数内是否有更改，在来一轮进行检查，直到没有任何一个值发生变化为止，如果循环10次后，angular认为值还在变，就报错