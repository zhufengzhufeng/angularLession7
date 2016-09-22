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
    }).controller('listCtrl',function ($scope,$timeout,$stateParams) {
         $scope.id =$stateParams.id; //获取路由中的参数
    });
//创建一个独立的控制器模块，方便我们书写控制器
