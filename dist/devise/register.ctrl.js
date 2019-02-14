(function(){
  'use strict';
  angular.module('FrontTest').controller('registerCtrl', function ($scope, Auth) {

    $scope.newUser = {};

    $scope.register = function () {
      Auth.create($scope.newUser)
        .then(function (userCreated) {
          alert('Criou!');
          console.log(userCreated);
        }).catch(function (err) {
          console.log(err);
          alert('Pau!');
        });
    }

  });
})();
