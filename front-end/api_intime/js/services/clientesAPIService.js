angular.module('appModule').service('clientesService',
function($http, $injector) {

    var ConfigApis = $injector.get('configApis');

    function _getClientes() {
        return $http.get(ConfigApis.urlAPIClientes);
    };

    function _getClientesFisicos() {
        return $http.get(ConfigApis.urlAPIClientesFisicos);
    };

    function _getClientesJuridicos() {
        return $http.get(ConfigApis.urlAPIClientesJuridicos);
    };

    this.getClientesFisicos = function() {
        return $http.get(ConfigApis.urlAPIClientesFisicos);
    };

    this.getClientesJuridicos = function() {
        return $http.get(ConfigApis.urlAPIClientesJuridicos);
    };

    this.getClientes = function() {
        return $http.get(ConfigApis.urlAPIClientes);
    };

    function _inserirCliente(cliente) {
        return $http.post(ConfigApis.urlAPIClientes, cliente);
    };

    function _atualizarCliente(cliente) {
        return $http.put(ConfigApis.urlAPIClientes, cliente);
    };

    this.salvarCliente = function(cliente) {
        return cliente.idCliente ? _atualizarCliente(cliente)
        : _inserirCliente(cliente);
    };

    this.removerCliente = function(cliente) {
        return $http.delete(ConfigApis.urlAPIClientes + "/" + cliente.idCliente);
    };
});