(function(){
  'use strict';
  angular.module('FrontTest').config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: './dist/devise/login.view.html',
        controller: 'loginCtrl'
      })
      .when('/register', {
        templateUrl: './dist/devise/register.view.html',
        controller: 'registerCtrl'
      });
  });
})();
