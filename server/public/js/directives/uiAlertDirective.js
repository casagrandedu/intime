angular.module('appModule').directive('uiAlert',
function() {
    return {
        templateUrl: "../view/directives/uiAlert.html",
        replace: true,
        restrict: 'E',
        scope: {
            titulo: "@"
        },
        transclude: true
    };
});