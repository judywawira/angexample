'use strict'

angular.module('angexample')
.factory('patientService', ['$http', '$rootScope', 'patient', function ($http, $rootScope){
	var patient;
	var openmrsUrl = angexample.Constants.openmrsUrl;
	var baseOpenMRSRESTURL = angexample.Constants.baseOpenMRSRESTURL;
	
	var generateIdentifier = function (patient) {
        var idgenJson = {"identifierSourceName": patient.identifierPrefix.prefix};
        return $http.post(openmrsUrl + "/ws/rest/v1/idgen", idgenJson);
    };
})

