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

## 过滤器

## 自定义过滤器

## 在控制函数中使用过滤器

## ng-model-options

## ng-class

## $watch $apply

## $timeout/$interval

## $interval.cancel

## validate

## angular中的服务

## config函数

## angular中的装饰

## angular中的事件

## angular中的注射器

## ng-route的使用


## ng-switch
## ng-href
## ng-src
