angular.module('appModule').factory('estadosService',
function($http, $injector) {

    var ConfigApis = $injector.get('configApis');

    function _getEstados() {
        return $http.get(ConfigApis.urlAPIEstados);
    }

    return {
        getEstados: _getEstados
    };
});