var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function ($scope, $http) {
	$scope.formModel = {};

	$scope.onSubmit = function () {
		console.log("Hey i'm submitted!");
		console.log($scope.formModel);

		$http.post('http://localhost/test', $scope.formModel).
			success(function (data) {
				console.log(":)")
			}).error(function(data) {
				console.log(":(")
			});
	};
});
