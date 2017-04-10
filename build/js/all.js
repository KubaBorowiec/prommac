var app=angular.module("PrommacApp",["ngRoute","ngAnimate","ngSanitize","ui.bootstrap"]);
app.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/",{controller:"startController",templateUrl:"../../build/templates/view/start.html"}),
	$routeProvider.when("/news",{controller:"newsController",templateUrl:"../../build/templates/view/posts.html"}),
	$routeProvider.when("/news/:name", {controller:"postController",templateUrl:"../../build/templates/view/post.html"}),
	$routeProvider.when("/media",{controller:"mediaController",templateUrl:"../../build/templates/view/media.html"}),
	$routeProvider.when("/about",{controller:"aboutController",templateUrl:"../../build/templates/view/about.html"}),
	$routeProvider.when("/players",{controller:"playersController",templateUrl:"../../build/templates/view/players.html"}),
	$routeProvider.otherwise({redirectTo:"/"})}]);
app.controller("aboutController",["$scope",function(o){}]);
app.controller("headerController",["$scope","$location",function(o,n)
	{o.isActive=function(o){return o===n.path()}}]);
app.controller("mediaController",["$scope",function(o){

}]);
app.controller("newsController",["$scope","$http","$log",function(t,e,o)
	{e({method:"GET",url:"../../app/data/posts.json"}).then(function(e)
	{t.posts=e.data.posts,t.totalItems=t.posts.length},function(t){}),
	t.maxSize=5,t.itemsPerPage=3,t.currentPage=1,t.maxSize=5,t.bigTotalItems=175,t.bigCurrentPage=1}]);
app.controller("playersController",["$scope",function(o){

}]);
app.controller("postController",["$scope","$http","$routeParams","$sce",function(t,n,r,e)
	{n({method:"GET",url:"../../app/data/posts.json"}).then(function(n){var o=n.data.posts,s=o.filter(function(t){return t.slug==r.name});
		if(t.post=s[0],t.content=e.trustAsHtml(s[0].content),console.log(s[0].id),s[0].id>0){var i=o.filter(function(t){return t.id==s[0].id-1});
		t.vsBefore=!0,t.before=i[0].slug}if(s[0].id<o.length-1){var f=o.filter(function(t){return t.id==parseInt(s[0].id)+1});
		t.vsAfter=!0,t.after=f[0].slug}},function(t){})}]);
app.controller("startController",["$scope",function(e)
  {e.slides=[{id:"0",
	image:"../../app/images/img00.jpg",
	text:"Image 01",href:"#/players"},
	{id:"1",image:"img/img01.jpg",text:"Image 02",href:"#/news/lukasz-klingier"}],
	e.myInterval=1e3}]);
app.directive("slider",["$timeout",function(e)
	{return{restrict:"AE",replace:!0,templateUrl:"../../build/templates/view/slider.html"}}]);