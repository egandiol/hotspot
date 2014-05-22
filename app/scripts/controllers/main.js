'use strict';

angular.module('hotspotApp')
.controller('MainCtrl', function ($scope, $http) {
	$scope.names = [];

	var getQ = function() {$http.get('http://public.opendatasoft.com/api/records/1.0/search?dataset=popular-baby-names-in-the-us&facet=column_1&facet=column_2&facet=column_3&facet=column_4').success( function (data) {
		$scope.names=data;
	});}


	getQ();
});