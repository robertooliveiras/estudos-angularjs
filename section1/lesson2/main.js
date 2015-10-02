var app = angular.module('minmax', []);
app.controller('MinMaxCtrl', function ($scope) {
    $scope.formModel = {};
    
    $scope.onSubmit = function () {
        console.log("Hey, i'm submitted!!");
        console.log($scope.formModel);
    }
});
