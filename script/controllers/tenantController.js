mainApp.controller("tenantController", function($scope, tenantService) {

    var ctrl = this;
    var templateUrl = "template/individual.html";
    var type = "person";

    var tenant = tenantService.getTenant(function(data) {
        $scope.data.type = data.type;
        $scope.data.types = data.types;
        $scope.data.tenant = data.tenant;
        console.log($scope.data.tenant);
    });

    function type_onChange() {
        if ($scope.data.tenant.type == "in") {
            $scope.data.template = "template/individual.html";
        } else {
            $scope.data.template = "template/company.html";
        }
    };

    function tenantCode_onChange() {
        tenantService.getTenant();
        tenant.validationLabel.code = "checking please wait";
    }

    function stepUp() {
        if ($scope.data.step.current < 3)
            $scope.data.step.current++;
    }

    function stepDown() {
        if ($scope.data.step.current > 1)
            $scope.data.step.current--;
    }

    $scope.data = {
        type: "in",
        types: [{ text: "Individual", key: "in" }],
        tenant: tenant,
        template: templateUrl,
        typeChange: type_onChange,
        tenantCodeChange: tenantCode_onChange,
        step: {
            stepUp: stepUp,
            stepDown: stepDown,
            current: 1,
        },

    };

});