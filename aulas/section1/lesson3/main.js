var app = angular.module ('minmax', []);

app.controller ('MinMaxCtrl', function ($scope, $http){

    $scope.formModel = {};
    
    $scope.onSubmit = function (){
        console.log("Yeeeeah!!! I'm debbuging in a AngularJS function!!");
        console.log($scope.formModel);
        //https://minmax-server.herokuapp.com/register/
        $http.post('http://localhost/test/', $scope.formModel).
            success(function (data) {
                console.log(";p");
            }).error(function (data){
                console.log(":| iiih!");
            })
    };
});
