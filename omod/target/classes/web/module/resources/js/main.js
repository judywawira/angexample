require(['config'], function(config) {
  requirejs.config({
    baseUrl: config.resourceLocation,
    paths: {
      'angular': 'lib/angular',
      'angular-resource': 'lib/angular-resource',
      'domReady': 'lib/domReady',
      'jquery': 'lib/jquery',
      'jquery-ui': 'lib/jquery-ui',
      'require': 'lib/require',
      'ui-bootstrap':'lib/ui-bootstrap-tpls-0.11.0.min.js',
      'bootstrap-css':'css/bootstrap-combined.min.css',
      'restangular':'lib/restangular.js'
    },
    shim: {
      'jquery-ui': ['jquery'],
      'angular': {
        deps: ['jquery'],
        exports: 'angular'
      },
      'angular-resource': ['angular'],
      'ui-bootstrap': ['ui-bootstrap'],
      'restangular':['restangular']
    }
  });

  require(['js/bootstrap'], function () {
      // nothing to do here - see basicexample-bootstrap.js
  });
});