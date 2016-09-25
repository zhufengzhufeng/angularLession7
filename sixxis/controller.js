angular.module('ctrl',[])
    .controller('indexCtrl',function ($scope) {
        $scope.list = '珠峰培训'
    })
    .controller('infoCtrl',function ($scope,$timeout,getDate) {
        $scope.users =getDate;
       /* $scope.users = [];
        $timeout(function () {
            $scope.users =
        },1000)*/
    }).controller('listCtrl',function ($scope,$timeout,$stateParams,$state) {
        $scope.id =$stateParams.id; //获取路由中的参数
        $scope.goIndex = function () { //$location
            //$state这个服务用来实现页面跳转的
            $state.go('list',{id:2}); //js跳转并传入参数
        }
    });
//创建一个独立的控制器模块，方便我们书写控制器
