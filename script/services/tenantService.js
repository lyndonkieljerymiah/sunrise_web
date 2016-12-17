mainApp.factory("tenantService", function($http) {

    function create() {
        return tenant = {
            validationLabel: {
                code: ""
            },
            code: "",
            name: "",
            emailAddress: "",
            telNo: "",
            mobileNo: "",
            address1: "",
            address2: "",
            city: "",
            postalCode: "",
            individual: {
                gender: "",
                birthday: "",
                company: ""
            },
            company: {
                businessType: "",
                crNo: "",
                validityDate: "",
                representative: ""
            }
        };
    }

    function getTenant(action) {
        //tenant/1
        $http.get("json/tenant.json").then(function(response) {
            var data = response.data;
            data.tenant.individual.birthday = new Date(response.data.tenant.individual.birthday); //moment(response.data.tenant.individual.birthday).format("MM/DD/YYYY");
            action(response.data);
        });
    }

    return {
        create: create,
        getTenant: getTenant
    };




});