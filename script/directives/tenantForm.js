/*Tenant Directive */
mainApp.directive("tenantform", function() {
    return {
        replace: true,
        restrict: 'EA',
        link: function(scope, elem) {
            scope.getTemplate = function() {
                return scope.data.template;
            };
        },
        template: '<div ng-include="getTemplate()"></div>'
    };
});

/*Villa Directive */
mainApp.directive("villa", function() {
    return {
        replace: true,
        restrict: 'EA',
        templateUrl: 'template/villa.html'
    };
});