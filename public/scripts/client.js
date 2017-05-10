console.log('js');

var myApp = angular.module( 'myApp', [] );

myApp.controller('inputController', function($scope, $http) {
  $scope.names = [];
  $scope.addName = function () {
    var objectToSend = {
      firstName: $scope.firstName,
      lastName: $scope.lastName
    }; // end objectToSend

    $http({
      method: 'POST',
      url: '/addName',
      data: objectToSend
    }).then( function success ( response ) {
      console.log( 'back from server with->', response.data );
      $scope.getNames();
    }); // end then success

  }; // end addName function

  $scope.getNames = function () {
    $http({
      method: 'GET',
      url: '/getNames',
    }).then( function success ( response ) {
      console.log( 'back from getNames with->', response.data );
      $scope.names = response.data;
    }); // end getNames GET
    
  }; // end getNames function
}); // end inputController

myApp.controller('somethingController', function($scope, $http) {

}); // end somethingController
