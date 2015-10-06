/**
 * Created by JaserAkuly on 10/5/15.
 */

var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('weatherCtrl', function ($scope) {
    $scope.hello = 'Hi!';
    $scope.user = {};

    $scope.checkWeather = function(loc) {
        console.log(loc);
        $scope.location_entered = loc;
    };
});
