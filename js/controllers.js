/**
 * Created by JaserAkuly on 10/5/15.
 */

var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('weatherCtrl', function ($scope, $http) {
    $scope.hello = 'Hi!';
    $scope.user = {};

    $scope.checkWeather = function(loc) {
        $scope.location_entered = loc;

        //retrieve weather data from the website adding + location the user provided above
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?&APPID=7c99bd12f8e57f1557fe0472e9ea0a64&q=' + loc
        }).then(function successCallback(response) {
            console.log("Got success!", response);
        }, function errorCallback(response) {
            console.log("Got error!", response);
        });
    };
});
