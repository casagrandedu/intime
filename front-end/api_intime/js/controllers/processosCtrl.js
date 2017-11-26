angular.module('appModule').controller('processosCtrl',
function($scope, $injector) {

    var processosService = $injector.get('processosService');

    function _inicio() {
        ProcessosService.getProcessos()
        .then(function(response) {
            $scope.processos = response.data;
        });
    }

    _inicio();

});