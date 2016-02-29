'use strict';

angular
  .module('project', [
  	'ngAnimate', 
  	'ngTouch', 
  	'ngSanitize', 
  	'ngMessages', 
  	'ngAria', 
  	'ngResource', 
  	'ui.router', 
  	'toastr'
  ])
  .run(function ($rootScope, $state) {
  	$rootScope.$on('$stateChangeError', 
  		function (event, toState, toParams, fromState, fromParams, error) {
  			if (angular.isString(error)) {
	        event.preventDefault();
	        switch (error) {
	          case 'NotAuthorized':
	            $state.go('anon.access');
	            break;
	          case 'NotAnon':
	            $state.go('user.timeline');
	            break;
	        }
      	}
  		}
		);
	
  });

