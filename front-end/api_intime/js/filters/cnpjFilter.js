angular.module('appModule').filter('cnpj', function() {
    return function(input) {
        if (!input) {
            return;
        }
        var cnpjs = input.split(" ");
        var cnpjsFormatados = cnpjs.map(function(cnpj) {
            return cnpj.charAt(0) + cnpj.charAt(1) + "." + cnpj.charAt(2) + 
            cnpj.charAt(3) + cnpj.charAt(4) + "." + cnpj.charAt(5) +
            cnpj.charAt(6) + cnpj.charAt(7) + "/" + cnpj.charAt(8) +
            cnpj.charAt(9) + cnpj.charAt(10) + cnpj.charAt(11) +
            "-" + cnpj.charAt(12) + cnpj.charAt(13);
        });
        return cnpjsFormatados.join(" ");
    };
});