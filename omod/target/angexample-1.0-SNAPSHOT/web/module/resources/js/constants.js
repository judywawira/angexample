var Soddo = Soddo || {};

angexample.Constants = {
    patientIdentifierTypeName: "Soddo Id",
    encounterType: {
        registration: "REG"
    },
    // should be picking this up from global properties.
    visitType: {
        emergency: "EMERGENCY"
    },
    openmrsUrl: "/openmrs",
    baseOpenMRSRESTURL: "/openmrs/ws/rest/v1",
    patientImageURL: "/patient_images/",
    soddoRESTBaseURL: "/openmrs/ws/rest/v1/bahmnicore",
    emrApiRESTBaseURL: "/openmrs/ws/rest/emrapi",
    emrApiEncounterUrl: "/openmrs/ws/rest/emrapi/encounter",
    webServiceRestBaseURL: "/openmrs/ws/rest/v1",
    registrationFeesConcept: "REGISTRATION FEES",
    allAddressFields: ["uuid", "preferred", "address1", "address2", "address3", "address4", "address5", "address6", "cityVillage", "countyDistrict", "stateProvince", "postalCode", "country", "latitude", "longitude"]
};
