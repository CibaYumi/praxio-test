(function(){
  'use strict';
  angular.module('FrontTest').controller('loginCtrl', function ($scope, $location, $rootScope, App, Auth) {

    if(Auth.session.get()) $location.path('/home');

    $scope.login = {};

    $scope.logIn = function () {
      App.load.start('Validando seu usuário...');
      Auth.login($scope.login)
        .then(function (result) {
          try {
            App.load.stop();
            Auth.session.set(result);
            $location.path('/home');
          } catch (e) {
            alert('Erro ao salvar sua sessão, tente novamente!');
          }
        }).catch(function (err) {
          App.load.stop('Erro ao efetuar o login!');
          // alert('Erro ao logar!');
          // console.log(err);
        });
    };

  });
})();
