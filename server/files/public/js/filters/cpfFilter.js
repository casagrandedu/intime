angular.module('appModule').filter('cpf', function() {
    return function(input) {
        if (!input) {
            return;
        }
        var cpfs = input.split(" ");
        var cpfsFormatados = cpfs.map(function(cpf) {
            return cpf.charAt(0) + cpf.charAt(1) + cpf.charAt(2) + "." + 
            cpf.charAt(3) + cpf.charAt(4) + cpf.charAt(5) + "." +
            cpf.charAt(6) + cpf.charAt(7) + cpf.charAt(8) + "-" +
            cpf.charAt(9) + cpf.charAt(10);
        });
        return cpfsFormatados.join(" ");
    };
});