app.controller("mainController",["$scope","$location", function($scope,$location){
	$scope.mobileToggle=function(){
        $scope.isActiveMobile = !$scope.isActiveMobile;
    };
}]);
 