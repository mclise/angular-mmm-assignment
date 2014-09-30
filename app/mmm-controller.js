'use strict';

module.exports = function(app){
	app.controller('mmmController', function($scope, calcService){
		$scope.results = calcService.results;

		$scope.calculate = function(userInput) {
			var sortedNums = calcService.sortNums(userInput);
			calcService.mean(sortedNums);
			calcService.median(sortedNums);
			calcService.mode(sortedNums);
			$scope.results = calcService.results;
		};
	});
};