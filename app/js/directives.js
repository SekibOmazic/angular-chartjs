'use strict';

/* Directives */


angular.module('chartjsApp.directives', []).
    directive('chart', function($timeout) {

        return {
            restrict: 'EA',
            replace: true,
            template: "<canvas>Your browser doesn't support HTML5</canvas>",

            scope:{
                width:"@",
                height:"@",
                type: "@",
                data:"="
            },

            link: function(scope, element, attrs) {

                var type = "Pie";

                switch (attrs.type.toLowerCase()) {
                    case "line": type="Line"; break;
                    case "bar": type="Bar"; break;
                    case "radar": type="Radar"; break;
                    case "polararea": type="PolarArea"; break;
                    case "pie": type="Pie"; break;
                    case "doughnut": type="Doughnut"; break;
                }

                // options
                var opts = angular.extend({}, scope.$eval(attrs.options));

                // Watches, to refresh the chart when its data change
                scope.$watch('data', function() {
                    draw();
                }, true); // true is for deep object equality checking

                function draw() {
                    if (!draw.triggered) {
                        draw.triggered = true;

                        //$timeout(function () {
                        draw.triggered = false;
                        new Chart(element[0].getContext("2d"))[type](scope.data, opts);
                        //}, 0, true);
                    }
                }
            }

        };

    });
