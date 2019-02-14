(function(){
  'use strict';
  angular.module('FrontTest').controller('homeCtrl', function ($scope, $location, App, Auth) {

    if(!Auth.session.get()) $location.path('/login');

    $scope.logout = function () {
      App.load.start('Deslogando...');
      try {
        Auth.logout();
        App.load.stop();
        $location.path('/login');
      } catch (e) {
        App.load.stop('Erro ao efetuar o logout!');
        // alert('Erro ao deslogar!');
      }
    };

  });
})();
