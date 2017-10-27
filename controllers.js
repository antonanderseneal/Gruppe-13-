var nameSpace = angular.module("MyInfo", []);

nameSpace.controller("MyInfoFunction", function MyInfoFunction($scope, testService)  {
    
    function Init() {
      $scope.data = {};
      testService.getData().then(function(data) {
          console.log(data);
          $scope.myinfoVariable = data.data;
      });
   }
   Init();
});


nameSpace.service('testService', function ($http) {
    this.getData = function () {
        return $http.get('data.json');
    }
});