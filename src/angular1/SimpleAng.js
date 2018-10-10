var app = angular.module('SampleApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.products = ['milk', 'bread', 'juice'];

    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    }
})