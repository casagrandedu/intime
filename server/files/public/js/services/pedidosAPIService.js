angular.module('appModule').service('pedidosService',
function($http, $injector) {

    var ConfigApis = $injector.get('configApis');

    this.getPedidos = function() {
        return $http.get(ConfigApis.urlAPIPedidos);
    };

    function _inserirPedido(pedido) {
        return $http.post(ConfigApis.urlAPIPedidos, pedido);
    }

    function _atualizarPedido(pedido) {
        return $http.put(ConfigApis.urlAPIPedidos, pedido);
    }

    this.salvarPedido = function(pedido) {
        return pedido.idPedido ? _atualizarPedido(pedido)
        : _inserirPedido(pedido);
    };

    this.removerPedido = function(pedido) {
        return $http.delete(ConfigApis.urlAPIPedidos + "/" + pedido.idPedido);
    };
});