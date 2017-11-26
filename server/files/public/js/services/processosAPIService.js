angular.module('appModule').factory('processosService',
function($http, $injector) {

    var ConfigApis = $injector.get('configApis');

    function _getProcessos() {
        return $http.get(ConfigApis.urlAPIProcessos);
    }

    return {
        getProcessos: _getProcessos
    };
});