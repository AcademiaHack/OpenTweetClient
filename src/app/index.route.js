'use strict';

angular
  .module('project')
  .config(function routerConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('anon', {
        abstract: true,
        template: '<div ui-view></div>',
         resolve: {
          logged: function ($q, $injector) {
            if ($injector.get('Token').has()) {
              return $q.reject("NotAnon");
            }
          }
        }
      })
      .state('anon.register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      })
      .state('anon.access', {
        url: '/access',
        templateUrl: 'app/access/access.html',
        controller: 'AccessController',
        controllerAs: 'access'
      });

   
    $stateProvider
      .state('user', {
        abstract: true,
        template: '<div ui-view></div>',
        resolve: {
          security: function($q, $injector){
            if (!$injector.get('Token').has()) {
              return $q.reject('NotAuthorized');
            }
          }
        }
      })
      .state('user.timeline', {
        url: '/timeline',
        templateUrl: 'app/timeline/timeline.html',
        controller: 'TimelineController',
        controllerAs: 'timeline'
      })

    $urlRouterProvider.otherwise('/register');
  });

