(function(){
  'use strict';
  angular.module('praxioTest').config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'login.view.html',
        controller: 'loginCtrl'
      })
      .when('/register', {
        templateUrl: 'register.view.html',
        controller: 'registerCtrl'
      });
  });
})();
