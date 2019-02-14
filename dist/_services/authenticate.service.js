(function () {
  'use strict';
  angular.module('FrontTest').factory('Auth', function ($http) {

    var Endpoint = 'https://recrutamento-praxio.azurewebsites.net/Api/';

    var _create = function (data) {
      return $http.post(Endpoint + 'Usuario', data)
        .then(function (response) {
          return response.data;
        });
    };

    var _login = function (data) {
      return $http.post(Endpoint + 'Authorization', data)
        .then(function (response) {
          return response.data;
        });
    };

    var _logout = function () {
      return $.jStorage.flush();
    };

    var _session = {
      get : function () {
        return $.jStorage.get('session');
      },
      set : function (data) {
        return $.jStorage.set('session', data);
      }
    }

    return {
      login : _login,
      logout : _logout,
      session : _session,
      create : _create
    };

  });
})();
