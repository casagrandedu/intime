angular.module('appModule').controller('tiposServicosCtrl',
function($scope, $injector) {

    var TiposServicosService = $injector.get('tiposServicosService');

    function _inicio() {
        TiposServicosService.getTiposServicos()
        .then(function(response) {
            $scope.tiposServicos = response.data;
        });
    }

    _inicio();

});