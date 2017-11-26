angular.module('appModule').controller('enderecosCtrl',
function($scope, $filter, $http, $injector) {
    $scope.titulo = 'Lista de Endereços';
    $scope.anoAtual = new Date().getFullYear();

    $scope.enderecos = [];
    $scope.cidades = [];
    $scope.clientes = [];
    $scope.estados = [];

    $scope.statusProcessos = [
        {"descricao" : "Finalizado"},  
        {"descricao" : "Em andamento"}
    ];

    var CidadesService = $injector.get('cidadesService');
    var EnderecosService = $injector.get('enderecosService');
    var ClientesService = $injector.get('clientesService');
    var EstadosService = $injector.get('estadosService');

    function _carregarEnderecos() {
        EnderecosService.getEnderecos()
        .then(function(response) {
            $scope.enderecos = response.data;
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao consultar os enderecos: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    }

    function _carregarCidades() {
        CidadesService.getCidades()
        .then(function(response) {
            $scope.cidades = response.data;
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao consultar as cidades: "
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

    function _carregarEstados() {
        EstadosService.getEstados()
        .then(function(response) {
            $scope.estados = response.data;
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao consultar os estados: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    }

    $scope.salvarEndereco = function(endereco) {
        //pedido.statusProcesso = $scope.registroPedido.statusProcesso;
        
        var novoEndereco = endereco;
        //pedido.dataPedido = new Date();
        if (!endereco.idEndereco) {
            novoEndereco = angular.copy(
                angular.extend(endereco));
        }
        _salvarEndereco(novoEndereco);
    };

    function _salvarEndereco(registroEndereco) {
        EnderecosService.salvarEndereco(registroEndereco)
        .then(function(response) {
            delete $scope.registroPedido;
            $scope.valueTabela = true;
            $scope.valueCadastro = false;
            $scope.enderecoForm.$setPristine();
            _carregarEnderecos();
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao salvar o endereço: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    };

    function _removeEndereco(endereco) {
        EnderecosService.removerEndereco(endereco)
        .then(function(response) {
            _carregarEnderecos();
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao remover o endereço: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    }

    $scope.removerEnderecos = function(enderecos) {
        if (!confirm("Você realmente deseja remover esses endereços?")) {
            return;          
        }

        enderecos.forEach(function(endereco) {
            if (endereco.selecionado) {
                _removeEndereco(endereco);
            }
        });
    };

    $scope.removerEndereco = function(endereco) {
        if (!confirm("Você realmente deseja remover este endereço?")) {
            return;          
        }
        
        _removeEndereco(endereco);
    };

    $scope.editarEndereco = function(endereco) {
        $scope.mostraForm = true;
       // pedido.dataEntrega = new Date(pedido.dataEntrega);
        $scope.registroEndereco = angular.copy(endereco);
        //$scope.registroPedido.statusProcesso = pedido.statusProcesso;

        $scope.valueTabela = false;
        $scope.valueCadastro = true;
    };

    $scope.temEnderecoSelecionado = function(enderecos) {
        return enderecos.some(function(endereco) {
            return endereco.selecionado;
        });
    };

    $scope.ordenaPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    $scope.valueTabela = true;
    $scope.valueCadastro = false;

    _carregarEstados();
    _carregarEnderecos();
    _carregarCidades();
    _carregarClientes();
});
