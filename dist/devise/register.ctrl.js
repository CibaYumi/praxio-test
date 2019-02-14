(function(){
  'use strict';
  angular.module('FrontTest').controller('registerCtrl', function ($scope, $location, Auth, App) {

    $scope.newUser = {};

    $scope.register = function () {
      App.load.start('Criando o seu usuário...');
      Auth.create($scope.newUser)
        .then(function (userCreated) {
          alert('Usuario criado com sucesso!');
          App.load.stop();
          $location.path('/login');
        }).catch(function (err) {
          alert('Erro ao criar usuario!');
          App.load.stop();
        });
    };

    $scope.findAddress = function () {
      if($scope.newUser.cep.length == 8) {
        App.findAddress($scope.newUser.cep)
          .then(function (result) {
            $scope.newUser.logradouro = result.logradouro;
            $scope.newUser.bairro = result.bairro;
          }).catch(function (err) {

          });
      }
    };

  });
})();
