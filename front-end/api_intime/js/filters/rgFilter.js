angular.module('appModule').filter('rg', function() {
    return function(input) {
        if (!input) {
            return;
        }
        var rgs = input.split(" ");
        var rgsFormatados = rgs.map(function(rg) {
            return rg.charAt(0) + "." + rg.charAt(1) + rg.charAt(2) + rg.charAt(3) + "." +
            rg.charAt(4) + rg.charAt(5) + rg.charAt(6);
        });
        return rgsFormatados.join(" ");
    };
});