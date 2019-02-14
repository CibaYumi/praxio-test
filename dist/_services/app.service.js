(function () {
  'use strict';
  angular.module('FrontTest').factory('App', function ($http, $rootScope, $timeout) {

    var _load = new function(){
			this.start = function(data){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
				return $rootScope.$broadcast('load_on', data);
			};
			this.stop = function(timeout){
				if(timeout){
					return $timeout(function () {
						$rootScope.$broadcast('load_off');
					}, timeout);
				}
				$rootScope.$broadcast('load_off');
			};
		};

    var _goTop = function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    var _findAddress = function (cep) {
      return $http.get('http://viacep.com.br/ws/' + cep + '/json/')
        .then(function (response) {
          return response.data;
        });
    };

    return {
      load : _load,
      goTop : _goTop,
      findAddress : _findAddress
    };

  });
})();
