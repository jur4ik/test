angular.module('HomeAuto', [])
          .controller('HelloUserController', function($scope) {
              $scope.greeting ="";
              $scope.NameChange = function () {
                  $scope.greeting = "Hello " + $scope.name;
              };
          });
