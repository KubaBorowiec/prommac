app.controller("startController",["$scope",function($scope)
  {
    $scope.pageClass= "start",
  	$scope.slides=[{id:"0",
	image:"images/img00.jpg",
	text:"Image 01",href:"#/players"},
	{id:"1",image:"images/img01.jpg",text:"Image 02",href:"#/news/lukasz-klingier"}],
	$scope.myInterval=1e3
}]);