angular.module('scrum.controllers.application', [])

.controller('ApplicationController',['$scope','$rootScope', function ($scope,$rootScope) {
	console.log("ApplicationController");

	$rootScope.index = 0;
	$rootScope.alerts = [];

	$scope.set = function(index){
		if(index >= 0 && index <= $rootScope.cant){
			$rootScope.index = index;
			$rootScope.percent = 100/($rootScope.cant)*index;
		}
	}

	$scope.close = function(){		
    	win.close(); 
	}
}])

.controller('AlertCtrl', function ($rootScope){
	console.log("AlertCtrl");

	$rootScope.closeAlert = function(index) {
		$rootScope.alerts.splice(index, 1);
	};
})

.controller('ProgressCtrl', function ($rootScope){
	console.log("ProgressCtrl");
})