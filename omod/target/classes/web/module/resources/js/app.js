define([
		'angular',
		'config',
		'require',
		'restangular',
		'js/controllers/index',
	    'js/directives/index',
	    'js/filters/index',
	    'js/services/index'
	], function(angular) {

		'use strict';

		return angular.module('angexample', [
			'angexample.services',
			'angexample.controllers',
			'angexample.filters', 
			'angexample.directives'
		]);

});
