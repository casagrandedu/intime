angular.module('appModule').filter('cel', function() {
    return function(input) {
        if (!input) {
            return;
        }
        var cels = input.split(" ");
        var celsFormatados = cels.map(function(cel) {
            return "(" +  cel.charAt(0) + cel.charAt(1) + ")" + " " + cel.charAt(2) + " " + cel.charAt(3) +
            cel.charAt(4) + cel.charAt(5) + cel.charAt(6) + "-" + cel.charAt(7) + cel.charAt(8) + 
            cel.charAt(9) + cel.charAt(10);
        });
        return celsFormatados.join(" ");
    };
});