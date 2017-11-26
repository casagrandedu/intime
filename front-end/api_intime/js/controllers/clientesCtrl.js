angular.module('appModule').controller('clientesCtrl',
function($scope, $injector) {
    $scope.titulo = 'Lista de Clientes';
    $scope.anoAtual = new Date().getFullYear();
    $scope.tipoPessoa = 'fisica';

    $scope.clientes = [];
    $scope.enderecos = [];
    $scope.cidades = [];
    $scope.estados = [];

    $scope.valueModal = false;
    $scope.valueModall = false;
    $scope.valueModalJ = false;
    $scope.valueModallJ = false;
    $scope.valueTabela = true;
    $scope.valueCadastro = false;

    $scope.sexos = [
        {"descricao" : "M"},  
        {"descricao" : "F"}
    ];

    var ClientesService = $injector.get('clientesService');
    var CidadesService = $injector.get('cidadesService');
    var EstadosService = $injector.get('estadosService');

    $scope.mostraForm = function(){
        $scope.valueTabela = false;
        $scope.valueCadastro = true;
    }

    $scope.mostraModal = function(){
        $scope.valueModal = true;
    }

    $scope.fechaModal = function(){
        $scope.valueModal = false;
    }

    $scope.mostraModall = function(){
        $scope.valueModall = true;
    }
    
    $scope.fechaModall = function(){
        $scope.valueModall = false;
    }

    $scope.mostraModalJ = function(){
        $scope.valueModalJ = true;
    }

    $scope.fechaModalJ = function(){
        $scope.valueModalJ = false;
    }

    $scope.mostraModallJ = function(){
        $scope.valueModallJ = true;
    }
    
    $scope.fechaModallJ = function(){
        $scope.valueModallJ = false;
    }

    function _carregarClientesFisicos() {
        ClientesService.getClientesFisicos()
        .then(function(response) {
            $scope.clientes = response.data;
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao consultar os clientes 'físicos': "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    }

    function _carregarClientesJuridicos() {
        ClientesService.getClientesJuridicos()
        .then(function(response) {
            $scope.clientes = response.data;
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao consultar os clientes 'jurídicos': "
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

    $scope.carregarCidades = function(idEstado) {
        if (!idEstado) {
            return;
        }

        CidadesService.getCidadesPorEstado(idEstado)
        .then(function(response) {
            $scope.cidades = response.data;
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao consultar as cidades: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    }

    $scope.carregarClientesFisicos = function() {
        _carregarClientesFisicos();
    }

    $scope.carregarClientesJuridicos = function() {
        _carregarClientesJuridicos();
    }

    $scope.salvarCliente = function(cliente) {
        cliente.tipoPessoa = $scope.tipoPessoa;
        

        if (cliente.tipoPessoa  === "fisica") {
            cliente.sexo = $scope.registroCliente.sexo; 
        }
        _salvarCliente(cliente);
    };

    function _salvarCliente(registroCliente) {
        ClientesService.salvarCliente(registroCliente)
        .then(function(response) {

            if (registroCliente.tipoPessoa === "fisica") {
                delete $scope.registroCliente;
                $scope.valueTabela = true;
                $scope.valueCadastro = false;
                
                $scope.clienteFisico.$setPristine();
                _carregarClientesFisicos();

            }else{
                delete $scope.registroCliente;
                $scope.valueTabela = true;
                $scope.valueCadastro = false;

                $scope.clienteJuridico.$setPristine();
                _carregarClientesJuridicos();
            }
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao salvar o cliente: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    };

    function _removeCliente(cliente) {
        ClientesService.removerCliente(cliente)
        .then(function(response) {
            if (cliente.tipoPessoa === "fisica") {
                _carregarClientesFisicos();    
            }else{
                _carregarClientesJuridicos();
            }
        })
        .catch(function(response) {
            $scope.mensagemErro = "Ocorreu um problema ao remover o cliente: "
            + response.status + " - " + response.statusText + " " + response.data;
        });
    }

    $scope.removerClientes = function(clientes) {
        if (!confirm("Você realmente deseja remover esses clientes?")) {
            return;          
        }
        clientes.forEach(function(cliente) {
            if (cliente.selecionado) {
                _removeCliente(cliente);
            }
        });
    };
    
    $scope.removerCliente = function(cliente) {
        if (!confirm("Você realmente deseja remover este cliente?")) {
            return;            
        }
        _removeCliente(cliente);
    };

    $scope.editarCliente = function(cliente) {
        cliente.dataNascimento = new Date(cliente.dataNascimento);
        $scope.registroCliente = angular.copy(cliente);

        if (cliente.tipoPessoa  === "fisica") {
            $scope.registroCliente.sexo = cliente.sexo;
        }

        $scope.valueTabela = false;
        $scope.valueCadastro = true;
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

    _carregarClientesFisicos();
    _carregarEstados();
});