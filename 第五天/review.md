## bower
## ng-app
- 指定启动的模块，并且创建一个模块，让这个模块作为主模块，并且启动angular
## ng-model
- 实现双向绑定，让数据绑定在视图上，并且视图的改变会影响模型的改变
## 表达式
- { { } } 将模型的数据取出挂载在我们的视图上
## ng-bind
- 绑定数据和{{}}效果一样，他也支持三元和运算，防止闪烁,但是不支持嵌套，绑定多个元素不支持
## ng-bind-template
- 可以绑定多个数据，但是仍然不支持嵌套
## ng-clock
- 先将需要绑定的数据所在的dom隐藏，当angular编译好数据，将ng-cloak指令移除，防止闪烁
## 创建模块
- 通过angular全局对象创建模块
## 创建控制器
- 一切从模块开始，通过模块创建指令，控制器，服务，过滤器
- 特点
    - 在控制器中不要进行dom操作，在指令的link函数中操作dom
    - 控制器不可复用，也不可控制多试图
    - 控制器可以将所在的dom元素进行嵌套，控制器和dom是平行的
## run方法
- run方法，会在ng-app启动后执行，一帮用来初始化数据
## 防止压缩
- 可以采用数组的方式防止压缩
## ng-repeat
- 可以遍历对象和数组（track by $index）
## $sce识别html
- 使用ng-bind-html和$sce服务相结合，让html标签正常渲染
## ng-init
- 在当前作用域声明一个变量
## angular中的事件
- 在angular中所有的事件都在原生事件前加ng指令
- ng-click ng-mouseover ng-change ng-submit ng-cut ng-paste ng-copy 
## ng-disabled
- 让按钮不能使用,禁用状态
## ng-options
- select标签刷新数据 程序员可见as 用户可见for 单个数据 in 所有数据
## ng-show/ng-hide/ng-if
- ng-show/ng-hide 纯控制样式，不论是否成立，内部代码都执行
- ng-if 会产生独立作用域，并且不成立内部代码不执行
## 创建指令
- app.directive
- 特点
    - 组件式和装饰型指令
    - 不依赖于控制器
    - 不产生独立作用域
## 指令中的template
## 指令中的link
## 指令中的scope&=@
## 指令中的compile
## 指令间的交互
- 父级需要添加controller，子集需要require ^当前没有去上面找，找不到报错，引用后link函数中多了第4个参数为控制器实例 ?^找不到就不报错了
## 过滤器
- uppercase lowercase date json orderby limitTo number filter
## 自定义过滤器
- 可以自己定义过滤规则，实现过滤数据，用法在要格式化的数据后增加|来格式化数据
## 在控制函数中使用过滤器
- 在过滤器的名字后加Filter，或者直接注入$filter服务
## ng-model-options
- 可以限制数据更新时间{updateOn:'blur'}{debounce:2000}
## ng-class/ng-style
- 根据数据动态绑定class
- {true:'',false:''}[flag]
- {'样式名':'是否应用'}
## $watch $apply
- $watch监控数据变化，可以自己增加观察者$scope.$watch
- $apply应用，强制让angular做脏值检查，如果angular自带的不需要调用apply
## $timeout/$interval
- angular自己封装的定时器
## $interval.cancel
- 取消定时器
## validate
- 使用angular的验证，要先关闭h5验证，并且给需要验证的内容增加name和ng-model, 并且给form表单增加name属性
## angular中的服务
- provider 可配置，自动调用$get方法,配置时要增加Provider在config函数中配置，在config之前执行
- factory 直接返回$get的函数
- service 是factory返回的对象的构造函数
- value key value形式，直接是factory返回的对象
- constant 可配置 简单的key value
## config函数
- 用来配置服务的，在run方法前执行
## angular中的装饰
- 在config函数中注入$provide.decorator
## 控制器交互的事件
- $broadcast $emit (自己都能监控到变化) $on监听事件从
```
$scope.$on('事件的名字',function(e,data){
    //e表示事件源
})
```
## angular中的注射器
- 推断参数
```
injector().annonate()
```
- 获得服务
```
injector().get('服务的名字')
```
- 是否有服务
```
injector().has('服务的名字')
```
- 实例化函数
```
injector().instanite(function)
```
- invoke获得服务并且执行
```
injector().invoke(function)
```
## ng-route的使用
## ng-href
## ng-src




## 切换到cnpm
```
nrm use cnpm
```
## 安装ionic cordova
```
npm install ionic cordova -g 
```
## 在目录下
- 初始化项目 
```
ionic start mydemo
cd mydemo
```
## 运行项目
```
ionic serve
```

## 安装angular-resource
```
npm install angular-resource
```