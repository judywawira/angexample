define([
    './index',
    'config'
], function(controllers, config) {

    'use strict';

    controllers.controller('RegisterCtrl',

        function($scope, $routeParams,Restangular) {
            document.title = 'Register';
            $scope.contextPath = config.contextPath;
            $scope.resourceLocation = config.resourceLocation;
            
            #test 
            var baseConcepts = Restangular.all('concepts');
            baseConcepts.getList().then(function(concepts){
            	$scope.allConcepts = concepts;
            });
            
            
        }
    )
});