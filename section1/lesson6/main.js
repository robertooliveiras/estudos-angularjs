var app = angular.module('minmax', [
    'jcs-autoValidate'
]);

app.run(function (defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
        errorMessages['tooYoung'] = 'Voce precisa ter pelo menos {0} anos de idade para usar o site';
        errorMessages['tooOld'] = 'Voce precisa ter no maximo {0} anos de idade para usar o site';
        errorMessages['badUsername'] = 'Esse campo só pode conter números ou letras ou _';
        errorMessages['badName'] = 'Esse campo deve conter mais de {0} caracteres';
    });
});




app.controller('MinMaxCtrl', function ($scope, $http) {
	$scope.formModel = {};

	$scope.onSubmit = function () {

			console.log("Hey i'm submitted!");
			console.log($scope.formModel);

			$http.post('http://localhost/test/', $scope.formModel).
				success(function (data) {
					console.log(":)")
				}).error(function(data) {
					console.log(":(")
				});

	};
});
