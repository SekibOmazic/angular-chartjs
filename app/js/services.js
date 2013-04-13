'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple randomize service.
angular.module('chartjsApp.services', []).
    factory('Data', function () {
        return {
            randomize: function(bottom, top) {
                return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
            }
        };
    });