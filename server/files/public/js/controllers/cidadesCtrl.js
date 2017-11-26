angular.module('appModule').controller('cidadesCtrl',
function($scope, $injector) {

    var CidadesService = $injector.get('cidadesService');

    function _inicio() {
        CidadesService.getCidades()
        .then(function(response) {
            $scope.cidades = response.data;
        });
    }

    _inicio();

});