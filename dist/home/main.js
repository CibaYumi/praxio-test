(function(){
  'use strict';
  angular.module('FrontTest').config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'home.view.html',
        controller: 'homeCtrl'
      });
  });
})();
