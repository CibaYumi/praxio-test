(function(){
  'use strict';
  angular.module('FrontTest')
    .controller('appCtrl', function($scope, $rootScope){

      $rootScope.$on('load_on', function (evt, data) {
        $scope.loadText = data;
        $scope.load = true;
      });

      $rootScope.$on('load_off', function () {
        $scope.load = false;
      });

      $rootScope.$on('loading:progress', function (){
        $scope.load = true;
      });

      $rootScope.$on('loading:finish', function (){
        $scope.load = false;
      });
    })
})();
