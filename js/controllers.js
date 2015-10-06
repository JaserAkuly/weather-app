/**
 * Created by JaserAkuly on 10/5/15.
 */

var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('weatherCtrl', function ($scope, $http) {
    $scope.user = {};

    $scope.checkWeather = function (loc, zip, country, format) {
        $scope.location_entered = loc;
        console.log("Here is your location!", loc);

        var url = 'http://api.openweathermap.org/data/2.5/weather?&APPID=7c99bd12f8e57f1557fe0472e9ea0a64&q=';

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

                if (format === 'Fahrenheit') {

                    if ($scope.temperature <= 90) {
                        $scope.image = 'http://cdn.meme.am/instances/500x/61742507.jpg';
                    }
                    if ($scope.temperature <= 70) {
                        $scope.image = "http://i.imgur.com/AVWau0L.jpg?1";
                    }
                    if ($scope.temperature <= 50) {
                        $scope.image = 'http://i.imgur.com/bFYsQ5L.png';
                    }
                    if ($scope.temperature <= 30) {
                        $scope.image = 'http://cdn.instapop.com/assets/memes/Magnum%20P.I./4509/original.jpeg';
                    }
                    if ($scope.temperature <= 10) {
                        $scope.image = 'http://i.imgur.com/JBUX0Av.jpg?1';
                    }
                    if ($scope.temperature <= 0) {
                        $scope.image = 'http://imgur.com/RCTaMi6';
                    }

                } else if (format === 'Celsius') {

                    if ($scope.temperature <= 32) {
                        $scope.image = 'http://cdn.meme.am/instances/500x/61742507.jpg';
                    }
                    if ($scope.temperature <= 21) {
                        $scope.image = "http://i.imgur.com/AVWau0L.jpg?1";
                    }
                    if ($scope.temperature <= 10) {
                        $scope.image = 'http://i.imgur.com/bFYsQ5L.png';
                    }
                    if ($scope.temperature <= -1) {
                        $scope.image = 'http://cdn.instapop.com/assets/memes/Magnum%20P.I./4509/original.jpeg';
                    }
                    if ($scope.temperature <= -12) {
                        $scope.image = 'http://i.imgur.com/JBUX0Av.jpg?1';
                    }
                    if ($scope.temperature <= -17) {
                        $scope.image = 'http://imgur.com/RCTaMi6';
                    }

                } else {
                    if ($scope.temperature <= 305) {
                        $scope.image = 'http://cdn.meme.am/instances/500x/61742507.jpg';
                    }
                    if ($scope.temperature <= 294) {
                        $scope.image = "http://i.imgur.com/AVWau0L.jpg?1";
                    }
                    if ($scope.temperature <= 283) {
                        $scope.image = 'http://i.imgur.com/bFYsQ5L.png';
                    }
                    if ($scope.temperature <= 272) {
                        $scope.image = 'http://cdn.instapop.com/assets/memes/Magnum%20P.I./4509/original.jpeg';
                    }
                    if ($scope.temperature <= 260) {
                        $scope.image = 'http://i.imgur.com/JBUX0Av.jpg?1';
                    }
                    if ($scope.temperature <= 255) {
                        $scope.image = 'http://imgur.com/RCTaMi6';
                    }
                }
            }, function errorCallback(response) {
                console.log("Got error!", response);
            });
        }, 1000);

    };
});
