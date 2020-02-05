var app = angular.module("myApp", ['textAngular']);


(function () {
    angular.module("celebrityFacts", []);
    
  })();
  
app.controller('AppCtrl', function($scope) {
    
    $scope.name = "New Problem";
    $scope.time = "1";
    $scope.mem = "32";
    $scope.diff = "0";
    var probHtml = 
    '<h2 style="text-align: center;">' + $scope.name + '</h2>' +
    '<h6 style="text-align: center;">Time Limit: ' + $scope.time + ' seconds</h6>' +
    '<h6 style="text-align: center;">Memory Limit: ' + $scope.mem + ' megabytes</h6>'
    ;
    $scope.htmlVariable = "<p style=\"text-align: center;\">\
    <ul> \
      \
         \
         \
    </ul> \
    <p>This problem is an easy one: given integer <b>a</b> and <b>b</b>, calculate <b>a+b</b>.</p> \
    <p><b>Input</b><br> \
    <p><b>Output</b><br></p> \
    <p><b></b></p> \
    <div class=\"example\"> \
    <div class=\"title\"></div> \
    <div class=\"data\"><pre></pre></div>\
    <div class=\"title\"></div>\
    <div class=\"data\"><pre></pre></div>\
    </div>\
    <div class=\"example\">\
    <div class=\"title\"></div>\
    <div class=\"data\"><pre></pre></div>\
    <div class=\"title\"></div>\
    <div class=\"data\"><pre></pre></div>\
    </div>";
    $scope.desc = $scope.htmlVariable;
    $scope.myHTML = probHtml + '<div class="prob-desc">' + $scope.htmlVariable + '</div>';

    $scope.change = function() {
        probHtml = 
            '<h2 style="text-align: center;">' + $scope.name + '</h2>' +
            '<h6 style="text-align: center;">Time Limit: ' + $scope.time + ' seconds</h6>' +
            '<h6 style="text-align: center;">Memory Limit: ' + $scope.mem + ' megabytes</h6>' + 
            '<div class="prob-desc">' + $scope.htmlVariable + '</div>';
        $scope.desc = $scope.htmlVariable;
        $scope.myHTML = probHtml;
    }
});