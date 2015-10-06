/**
 * Created by JaserAkuly on 10/5/15.
 */

var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('weatherCtrl', function ($scope) {
    $scope.hello = 'Hi!';

    $scope.checkWeather = function(loc) {
        $scope.location_entered = loc;
    };
});
