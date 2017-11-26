angular.module('appModule').controller('appCtrl',
function($scope, $filter, $http, $injector) {
    $scope.titulo = 'Lista de Pedidos';
    $scope.anoAtual = new Date().getFullYear();

    $scope.pedidos = [];
    $scope.tiposServicos = [];
    $scope.clientes = [];
    $scope.processos = [];

    $scope.valueTabela = true;
    $scope.valueCadastro = false;
    $scope.valueModalQtd = false;
    $scope.valueModalDetalhes = false;

    $scope.statusProcessos = [
        {"descricao" : "Finalizado"},  
        {"descricao" : "Em andamento"}
    ];

    var TiposServicosService = $injector.get('tiposServicosService');
    var PedidosService = $injector.get('pedidosService');
    var ClientesService = $injector.get('clientesService');
    var ProcessosService = $injector.get('processosService');

    $scope.mostraForm = function(){
        $scope.valueTabela = false;
        $scope.valueCadastro = true;
    }

    $scope.mostraModalQtd = function(){
        $scope.valueModalQtd = true;
    }
    
    $scope.fechaModalQtd = function(){
        $scope.valueModalQtd = false;
    }

    $scope.mostraModalDetalhes = function(){
        $scope.valueModalDetalhes = true;
    }

    $scope.fechaModalDetalhes = function() {
        $scope.valueModalDetalhes = false;
    }

    function _carregarPedidos() {
        PedidosService.getPedidos()
        .then(function(response) {
            $scope.pedidos = response.data;
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao consultar os pedidos: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    }

    function _carregarTiposServicos() {
        TiposServicosService.getTiposServicos()
        .then(function(response) {
            $scope.tiposServicos = response.data;
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao consultar os serviços: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    }

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

    function _carregarProcessos() {
        ProcessosService.getProcessos()
        .then(function(response) {
            $scope.processos = response.data;
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao consultar os processos: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    }

    $scope.salvarPedido = function(pedido) {
        pedido.statusProcesso = $scope.registroPedido.statusProcesso;
        
        var novoPedido = pedido;
        pedido.dataPedido = new Date();
        if (!pedido.idPedido) {
            novoPedido = angular.copy(
                angular.extend(pedido));
        }
        _salvarPedido(novoPedido);
    };

    function _salvarPedido(registroPedido) {
        PedidosService.salvarPedido(registroPedido)
        .then(function(response) {
            delete $scope.registroPedido;
            $scope.valueTabela = true;
            $scope.valueCadastro = false;
            $scope.pedidoForm.$setPristine();
            _carregarPedidos();
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao salvar o pedido: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    };

    function _removePedido(pedido) {
        PedidosService.removerPedido(pedido)
        .then(function(response) {
            _carregarPedidos();
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao remover o pedido: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    }

    $scope.removerPedidos = function(pedidos) {
        if (!confirm("Você realmente deseja remover esses pedidos?")) {
            return;          
        }

        pedidos.forEach(function(pedido) {
            if (pedido.selecionado) {
                _removePedido(pedido);
            }
        });
    };

    $scope.removerPedido = function(pedido) {
        if (!confirm("Você realmente deseja remover este pedido?")) {
            return;          
        }
        
        _removePedido(pedido);
    };

    $scope.editarPedido = function(pedido) {
        $scope.mostraForm = true;
        pedido.dataEntrega = new Date(pedido.dataEntrega);
        $scope.registroPedido = angular.copy(pedido);
        $scope.registroPedido.statusProcesso = pedido.statusProcesso;

        $scope.valueTabela = false;
        $scope.valueCadastro = true;
    };

    $scope.temPedidoSelecionado = function(pedidos) {
        return pedidos.some(function(pedido) {
            return pedido.selecionado;
        });
    };

    $scope.ordenaPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    _carregarTiposServicos();
    _carregarPedidos();
    _carregarProcessos();
    _carregarClientes();
});
