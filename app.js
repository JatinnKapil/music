var app = angular.module('clockApp',[]);

app.controller('TimeCtrl',Time);

function Time($scope) {
  var currentDate = new Date();
   $scope.hours = currentDate.getHours();
  $scope.time = currentDate.toTimeString();
  $scope.updateTime = function() {
      console.log('button clicked !');
      var currentDate = new Date();
      $scope.time = currentDate.toTimeString();
      $scope.magic = 'This Clock App updates hahaha magic !!!!';
  }

}
