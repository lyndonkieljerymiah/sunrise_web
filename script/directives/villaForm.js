/*Villa Directive */
mainApp.directive("villa", function() {
    return {
        replace: true,
        restrict: 'EA',
        templateUrl: 'template/villa.html'
    };
});