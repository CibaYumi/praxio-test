(function(){
  'use strict';
  angular.module('FrontTest').config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: './dist/devise/login.view.html',
        controller: 'loginCtrl'
      })
      .when('/register', {
        templateUrl: './dist/devise/register.view.html',
        controller: 'registerCtrl'
      }).otherwise({
				templateUrl: './dist/devise/login.view.html',
				controller: 'loginCtrl'
			});
			$locationProvider.html5Mode(true);
  });
})();
