var app=angular.module("PrommacApp",["ngRoute","ngAnimate","ngSanitize","ui.bootstrap"]);
app.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/",{controller:"startController",templateUrl:"templates/start.html"}),
	$routeProvider.when("/news",{controller:"newsController",templateUrl:"templates/posts.html"}),
	$routeProvider.when("/news/:name", {controller:"postController",templateUrl:"templates/post.html"}),
	$routeProvider.when("/media",{controller:"mediaController",templateUrl:"templates/media.html"}),
	$routeProvider.when("/about",{controller:"aboutController",templateUrl:"templates/about.html"}),
	$routeProvider.when("/players",{controller:"playersController",templateUrl:"templates/players.html"}),
	$routeProvider.otherwise({redirectTo:"/"})}]);
app.controller("aboutController",["$scope",function($scope){}]);
app.controller("headerController",["$scope","$location",function(o,n)
	{o.isActive=function(o){return o===n.path()}}]);

app.controller("mediaController",["$scope",function(o){

}]);

app.controller("newsController",["$scope","$http","$log",function($scope,$http,$log)
	{$http({method:"GET",url:"data/posts.json"}).then(function($http)
	{$scope.posts=$http.data.posts,$scope.totalItems=$scope.posts.length},function($scope){}),
	$scope.maxSize=10,
	$scope.sorting='title',
	$scope.reverse=true,
	$scope.myFilter='',
	$scope.sortBy = function(sorting) {
     $scope.sorting = sorting;
    };
	$scope.itemsPerPage=20,
	$scope.currentPage=1,
	$scope.maxSize=5,
	$scope.bigTotalItems=175,
	$scope.bigCurrentPage=1}]);
app.controller("playersController",["$scope",function($log){

}]);

app.controller("postController",["$scope","$http","$routeParams","$sce",function($scope,$http,$routeParams,$sce)
	{$http({method:"GET",url:"data/posts.json"}).then(function($http){var o=$http.data.posts,s=o.filter(function($scope)
		{return $scope.slug==$routeParams.name});
		if($scope.post=s[0],$scope.content=$sce.trustAsHtml(s[0].content),console.log(s[0].id),s[0].id>0)
		{var i=o.filter(function($scope)
		{return $scope.id==s[0].id-1});
		$scope.vsBefore=!0,$scope.before=i[0].slug}
		if(s[0].id<o.length-1)
		{var f=o.filter(function($scope){return $scope.id==parseInt(s[0].id)+1});
		$scope.vsAfter=!0,$scope.after=f[0].slug}},
		function($scope){})}]);

app.controller("startController",["$scope",function(e)
  {e.slides=[{id:"0",
	image:"images/img01.jpg",
	text:"Image 01",href:"#/players"},
	{id:"1",image:"images/img01.jpg",text:"Image 02",href:"#/news/lukasz-klingier"}],
	e.myInterval=1e3}]);
app.directive("slider",["$timeout",function(e)
	{return{restrict:"AE",replace:!0,templateUrl:"templates/slider.html"}}]);