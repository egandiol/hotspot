'use strict';

var queryAll = 'http://public.opendatasoft.com/api/records/1.0/search?dataset=popular-baby-names-in-the-us&q=column_5%3E499&rows=100&facet=column_1&facet=column_2&facet=column_3&facet=column_4';
var queryTop100 = 'http://public.opendatasoft.com/api/records/1.0/search?dataset=popular-baby-names-in-the-us&q=column_5%3E499&rows=100&sort=column_5&facet=column_1&facet=column_2&facet=column_3&facet=column_4';

angular.module('hotspotApp')
.controller('MainCtrl', function ($scope, $http) {
	$scope.names = [];

	var getQ = function(urlquery) {
		$http.get(urlquery).success( function (data) {
		$scope.names=data;
	});};
		
	getQ(queryAll);
})
.directive('numberByYear', function() {
  return {
    template: '{{record.fields.column_5}} times in {{record.fields.column_3}}'
  };
});

angular.module('hotspotApp')
.controller('Top100', function ($scope, $http) {
	$scope.names = [];

	var getQ = function(urlquery) {
		$http.get(urlquery).success( function (data) {
		$scope.names=data;
	});};

	getQ(queryTop100);
});

angular.module('hotspotApp')
.controller('annee', function ($scope, $http, $routeParams) {
	$scope.names = [];

	var getQ = function(urlquery) {
		$http.get(urlquery).success( function (data) {
		$scope.names=data;
	});};
		
	getQ('http://public.opendatasoft.com/api/records/1.0/search?dataset=popular-baby-names-in-the-us&q=column_3%3D'+$routeParams.year+'%3B+column_5%3E499&rows=100&sort=column_5&facet=column_1&facet=column_2&facet=column_3&facet=column_4');
});

angular.module('hotspotApp')
.controller('name', function ($scope, $http, $routeParams) {
	$scope.names = [];

	var getQ = function(urlquery) {
		$http.get(urlquery).success( function (data) {
		$scope.names=data;
	});};
		
	getQ('http://public.opendatasoft.com/api/records/1.0/search?dataset=popular-baby-names-in-the-us&q=column_4%3D'+$routeParams.nom+'%3B+column_5%3E499&rows=100&sort=column_3&facet=column_1&facet=column_2&facet=column_3&facet=column_4');
});

angular.module('hotspotApp')
.controller('mf', function ($scope, $http, $routeParams) {
	$scope.names = [];

	var getQ = function(urlquery) {
		$http.get(urlquery).success( function (data) {
		$scope.names=data;
	});};
		
	getQ('http://public.opendatasoft.com/api/records/1.0/search?dataset=popular-baby-names-in-the-us&q=column_2%3D'+$routeParams.mf+'%3B+column_5%3E499&rows=100&sort=column_5&facet=column_1&facet=column_2&facet=column_3&facet=column_4');
});

angular.module('hotspotApp')
.controller('state', function ($scope, $http, $routeParams) {
	$scope.names = [];

	var getQ = function(urlquery) {
		$http.get(urlquery).success( function (data) {
		$scope.names=data;
	});};
		
	getQ('http://public.opendatasoft.com/api/records/1.0/search?dataset=popular-baby-names-in-the-us&q=column_1%3D'+$routeParams.st+'%3B+column_5%3E499&rows=100&sort=column_5&facet=column_1&facet=column_2&facet=column_3&facet=column_4');
});