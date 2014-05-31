'use strict'

angexample.CreatePatientRequestMapper = (function (){
	function CreatePatientRequestMapper(currentDate){
		this.currentDate = currentDate;
	}
	
	CreatePatientRequestMapper.prototype.mapfromPatient = function (patientAttributeTypes, patient) {
		var constants = angexample.Constants;
		
		var openMRSPatient = {
	            patient: {
	                person: {
	                    names: [
	                        {
	                            givenName: registration.firstName,
	                            middleName: registration.middleName,
	                            familyName: registration.lastName,
	                            "preferred": false
	                        }
	                    ],
	                    gender:registration.female
	        
	                }
					
})