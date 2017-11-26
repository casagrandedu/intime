angular.module('appModule').filter('cep', function() {
    return function(input) {
        if (!input) {
            return;
        }
        var ceps = input.split(" ");
        var cepsFormatados = ceps.map(function(cep) {
            return cep.charAt(0) + cep.charAt(1) + cep.charAt(2) + 
            cep.charAt(3) + cep.charAt(4) + "-" + cep.charAt(5) +
            cep.charAt(6) + cep.charAt(7);
        });
        return cepsFormatados.join(" ");
    };
});