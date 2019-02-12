(function(){
  'use strict';
  angular.module('FrontTest').config(function ($routeProvider) {
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
