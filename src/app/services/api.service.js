'use strict';

angular
	.module('project')
	.service('API', function (baseUrl) {

		var toUrl = function (path) {
			return baseUrl+path;
		}

		this.users = toUrl('/twitters/:id');
		this.tweets = toUrl('/tweets/:id');
	});
