/**
 * Created by JaserAkuly on 10/5/15.
 */

var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('weatherCtrl', function ($scope, $http) {
    $scope.hello = 'Hi!';
    $scope.user = {};

    $scope.checkWeather = function (loc, zip, country, format) {
        $scope.location_entered = loc;

        var url = 'http://api.openweathermap.org/data/2.5/weather?&APPID=7c99bd12f8e57f1557fe0472e9ea0a64&q=' + loc;

        //change how they generate the url
        if (loc !== undefined) {
            url += '&q=' + loc;
        } else if (zip !== undefined && country !== undefined) {
            url += '&zip=' + zip + ',' + country;
        } else {
            alert("Error, please provide either city or zip & country!");
            return;
        }

        //checking what the format the user provided ask the api the corresponding weather
        if (format === 'Celsius') {
            url += "&units=metric";
        } else if (format === 'Fahrenheit') {
            url += "&units=imperial";
        }


        //retrieve weather data from the website adding + location the user provided above
        setInterval(function () {
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
                console.log("Got success!", response);
                $scope.temperature = response.data.main.temp;
            }, function errorCallback(response) {
                console.log("Got error!", response);
            });
        }, 1000);
    };
});
