angular.module('appModule').controller('estadosCtrl',
function($scope, $injector) {

    var EstadosService = $injector.get('estadosService');

    function _inicio() {
        EstadosService.getEstados()
        .then(function(response) {
            $scope.estados = response.data;
        });
    }

    _inicio();

});