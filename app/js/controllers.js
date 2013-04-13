'use strict';

/* Controllers */

function DataCtrl1($scope, Data) {
    $scope.chartData = [
        { value: 30, color: "#D97041" },
        { value: 90, color: "#C7604C" },
        { value: 24, color: "#21323D" },
        { value: 58, color: "#9D9B7F" },
        { value: 82, color: "#7D4F6D" },
        { value: 8, color: "#584A5E" }
    ];

    $scope.randomizeChartData = function () {
        for (var i = 0; i < 6; i++) {
            $scope.chartData[i].value = Data.randomize(1, 100);
        }
    };

}

function DataCtrl2($scope, Data) {
    $scope.chartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };

    $scope.randomizeChartData = function () {
        for (var i = 0; i < 7; i++) {
            $scope.chartData.datasets[0].data[i] = Data.randomize(1, 100);
            $scope.chartData.datasets[1].data[i] = Data.randomize(1, 100);
        }
    };

}