'use strict';

angular
	.module('project')
	.factory('User', function (API, $resource) {
		return $resource(API.users,{
			id: '@id'
		},{

		});
	});
