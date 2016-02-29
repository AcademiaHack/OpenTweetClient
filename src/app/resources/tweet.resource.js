'use strict';

angular
	.module('project')
	.factory('Tweet', function (API, $resource) {
		return $resource(API.tweets,{
			id: '@id'
		},{

		});
	});
