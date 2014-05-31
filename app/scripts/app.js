'use strict';

angular
  .module('hotspotApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/all', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/top100', {
        templateUrl: 'views/main.html',
        controller: 'Top100'
      })
      .when('/annee', {
        templateUrl: 'views/main.html',
        controller: 'annee'
      })
      .when('/name', {
        templateUrl: 'views/main.html',
        controller: 'name'
      })
      .when('/mf', {
        templateUrl: 'views/main.html',
        controller: 'mf'
      })
      .when('/state', {
        templateUrl: 'views/main.html',
        controller: 'state'
      })
      .otherwise({
        redirectTo: '/all'
      });
  });
