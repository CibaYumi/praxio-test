(function(){
  'use strict';
  angular.module('praxioTest').config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'home.view.html',
        controller: 'homeCtrl'
      });
  });
})();
