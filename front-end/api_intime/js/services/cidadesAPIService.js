angular.module('appModule').factory('cidadesService',
function($http, $injector) {

    var ConfigApis = $injector.get('configApis');

    function _getCidades() {
        return $http.get(ConfigApis.urlAPICidades);
    }

    function _getCidadesPorEstado(estado){
        return $http.get(ConfigApis.urlAPICidades + '/' + estado.idEstado);
    }

    return {
        getCidades: _getCidades,
        getCidadesPorEstado: _getCidadesPorEstado
    };
});