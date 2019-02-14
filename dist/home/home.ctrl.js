(function(){
  'use strict';
  angular.module('FrontTest').controller('homeCtrl', function ($scope, $location, Auth) {

    if(!Auth.session.get()) $location.path('/login');

    $scope.logout = function () {
      try {
        Auth.logout();
        $location.path('/login');
      } catch (e) {
        alert('Erro ao deslogar!');
      }
    };


  });
})();
