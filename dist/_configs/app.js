(function(){
  'use strict';
  angular.module('FrontTest', ['ngRoute', 'ui.mask'])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider.otherwise({
        templateUrl: './dist/devise/login.view.html',
        controller: 'loginCtrl'
      });
      $locationProvider.html5Mode(true);
  })
})();
