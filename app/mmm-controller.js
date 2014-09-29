'use strict';

module.exports = function(app){
	app.controller('mmmController', function($scope){
		 $scope.results = {
		 	input: '',
		 	mean: 0,
		 	median: 0,
		 	mode: 0
		 };

		 $scope.mean = function(numbers) {
		  var mean;
		  var total = 0;
		  for (var i = 0; i < numbers.length; i++){
		    total = total + numbers[i];
		  }
		  mean = total / numbers.length;
		  $scope.results.mean = mean;
		};

		$scope.median = function(numbers) {
		  var median;
		  var mid = numbers.length / 2;
		  if (mid % 1 !== 0){
		    median = numbers[Math.floor(mid)]
		  } else {
		    median = (numbers[Math.floor(mid)] + numbers[Math.floor(mid) - 1]) / 2
		  }
		  $scope.results.median = median;
		};

		$scope.mode = function(numbers) {
		  var mode; 
		  var count = 1;
		  var tempCount = 1;
		  for (var i = 0; i < numbers.length - 1; i++){
		    
		    if (numbers[i] === numbers[i + 1]){
		      tempCount++;
		      if (tempCount > count){
		        mode = numbers[i];
		        count = tempCount;
		      }
		    } else {
		      tempCount = 1;
		    }
		  }
		  if(!mode){
		    $scope.results.mode = ("There is no mode");
		  } else {
		  $scope.results.mode = mode;
		  }
		};

		$scope.sortNums = function(input) {
			var numbers = [];
			var numberStrings = input.split(" ");
			for(var i = 0; i < numberStrings.length; i++){
  			numbers.push(parseInt(numberStrings[i]));
			};
		  numbers.sort(function(a, b){return (a - b)});
		  return numbers;
		};

		$scope.calculate = function(userInput) {
			var sortedNums = $scope.sortNums(userInput);
			$scope.mean(sortedNums);
			$scope.median(sortedNums);
			$scope.mode(sortedNums);
		};
	});
};