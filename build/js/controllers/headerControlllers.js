app.controller("headerController",["$scope","$location", function($scope,$location){
	{$scope.isActive=function($scope){return $scope===$location.path()}}
      $scope.mobileToggle=function(){
        var el = document.getElementById('main-menu');
        console.log(el);
        el.toggleClass('active');
    }
}]);