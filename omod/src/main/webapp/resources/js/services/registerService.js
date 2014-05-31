var registerService = angular.module('angexample.registerService', ['ngResource']);

registerService.config(function ($httpProvider) {
    // to prevent the browser from displaying a password pop-up in case of an authentication error
    $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = 'true';
});

registerService.factory('Concepts', function($resource) {
    return $resource("/" + OPENMRS_CONTEXT_PATH  + "/ws/rest/v1/concept/", {
    },{
        query: { method:'GET' }
    });
});