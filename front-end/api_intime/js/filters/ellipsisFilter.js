angular.module('appModule').filter('ellipsis', function() {
    return function(input, tamanho) {
        if (!input) {
            return;
        }
        return input.substring(0,tamanho || 10) +
        (((tamanho || 10) < input.length) ? '...' : '');
    };
});