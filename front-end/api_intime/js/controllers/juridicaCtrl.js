angular.module('appModule').controller('juridicaCtrl',
function($scope, $injector) {
    $scope.titulo = 'Lista de clientes';
    $scope.anoAtual = new Date().getFullYear();

    $scope.clientes = [];
    $scope.statusClientes = [];

    var ClientesService = $injector.get('clientesService');

    function _carregarClientes() {
        ClientesService.getClientes()
        .then(function(response) {
            $scope.clientes = response.data;
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao consultar os clientes: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    }

    $scope.salvarCliente = function(cliente) {
        cliente.statusCliente = "Ativo";
        _salvarCliente(cliente);
    };

    function _salvarCliente(registroCliente) {
        ClientesService.salvarCliente(registroCliente)
        .then(function(response) {
            delete $scope.registroCliente;
            $scope.clienteForm.$setPristine();
            _carregarClientes();
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao salvar o cliente: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    };

    function _removeCliente(cliente) {
        ClientesService.removerCliente(cliente)
        .then(function(response) {
            _carregarClientes();
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao remover o cliente: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    }

    $scope.removerClientes = function(clientes) {
        clientes.forEach(function(cliente) {
            if (cliente.selecionado) {
                _removeCliente(cliente);
            }
        });
    };

    $scope.removerCliente = function(cliente) {
        _removeCliente(cliente);
    };

    $scope.editarCliente = function(cliente) {
        $scope.registroCliente = angular.copy(cliente);
    };

    $scope.temClienteSelecionado = function(clientes) {
        return clientes.some(function(cliente) {
            return cliente.selecionado;
        });
    };

    $scope.ordenaPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    _carregarClientes();
});