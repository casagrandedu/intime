angular.module('appModule').factory('tiposServicosService',
function($http, $injector) {

    var ConfigApis = $injector.get('configApis');

    function _getTiposServicos() {
        return $http.get(ConfigApis.urlAPITiposServicos);
    }

    return {
        getTiposServicos: _getTiposServicos
    };
});