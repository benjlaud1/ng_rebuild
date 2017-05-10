console.log('js');

var myApp = angular.module( 'myApp', [] );

myApp.controller('inputController', function($scope, $http) {

  $scope.addName = function () {
    var objectToSend = {
      firstName: $scope.firstName,
      lastName: $scope.lastName
    }; // end objectToSend

    $http({
      method: 'POST',
      url: '/addName',
      data: objectToSend
    }).then(function success(response) {
      console.log('back from server with->', response.data);

    }); // end then success

  }; // end addName function
}); // end inputController

myApp.controller('somethingController', function($scope, $http) {

}); // end somethingController
