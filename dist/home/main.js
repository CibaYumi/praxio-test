(function(){
  'use strict';
  angular.module('FrontTest').config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: './dist/home/home.view.html',
        controller: 'homeCtrl'
      });
  });
})();
