angular.module('appModule').directive('uiNum', function($filter) {
    return {
        require: "ngModel",
        link: function(scope, elemento, atributos, controle) {

            function _formataNumero(numero) {
                if (!numero) {
                    return;
                }
                numero = numero.replace(/[^0-9]+/g, "");
                
                return numero;
            }

            elemento[0].onkeyup = function() {
                controle.$setViewValue(_formataNumero(controle.$viewValue));
                controle.$render();
            };
          
        }
    };
});