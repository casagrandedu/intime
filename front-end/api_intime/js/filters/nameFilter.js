angular.module('appModule').filter('name', function() {
    return function(input) {
        if (!input) {
            return;
        }
        var nomes = input.split(" ");
        var nomesFormatados = nomes.map(function(nome) {
            if (/(de)|(da)/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() +
            nome.substring(1).toLowerCase();
        });
        return nomesFormatados.join(" ");
    };
});