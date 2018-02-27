(function (app) {

    var myController = function ($scope) {
        $scope.message = "ANGULAR IS WORKING";

        $scope.showAlert = function () {
            swal("Howdee!");
        };
    };

    app.controller("myController", ["$scope", myController])

}(angular.module("app")));
