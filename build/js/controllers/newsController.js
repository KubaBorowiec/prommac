app.controller("newsController",["$scope","$http","$log",function($scope,$http,$log)
	{$http({method:"GET",url:"data/posts.json"}).then(function($http)
	{$scope.posts=$http.data.posts,$scope.totalItems=$scope.posts.length},function($scope){}),
	$scope.maxSize=10,
	$scope.sorting='title',
	$scope.reverse=true,
	$scope.myFilter='',
	$scope.sortBy = function(sorting) {
     	$scope.sorting = sorting;
     console.log('test');
    };
    $scope.setBegin = function(last) {
     	$scope.begin = (last * $scope.itemsPerPage);
    };
    $scope.begin = 0;
	$scope.itemsPerPage = 10
}]);