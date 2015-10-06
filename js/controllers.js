/**
 * Created by JaserAkuly on 10/5/15.
 */
var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('weatherCtrl', function ($scope) {
    $scope.hello = 'Hi! Testing if the scope variable works!';
});