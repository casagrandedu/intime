angular.module('appModule').filter('telefone', function(){
    return function(input) {
        if (!input) {
            return;
        }
        var telefones = input.split(" ");
        var telefonesFormatados = telefones.map(function(telefone) {
            return "(" + telefone.charAt(0) + telefone.charAt(1) + ")" + " " + telefone.charAt(2) + 
            telefone.charAt(3) + telefone.charAt(4) + telefone.charAt(5) + "-" + telefone.charAt(6) + 
            telefone.charAt(7) + telefone.charAt(8) + telefone.charAt(9);
        });
        return telefonesFormatados.join(" ");
    };
});