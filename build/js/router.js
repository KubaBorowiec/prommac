var app=angular.module('PrommacApp',['ngRoute','ngAnimate','ngSanitize','ui.bootstrap']);
app.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/",{controller:"startController",templateUrl:"templates/start.html"}),
	$routeProvider.when("/news",{controller:"newsController",templateUrl:"templates/news.html"}),
	$routeProvider.when("/news/:name", {controller:"postController",templateUrl:"templates/post.html"}),
	$routeProvider.when("/media",{controller:"mediaController",templateUrl:"templates/media.html"}),
	$routeProvider.when("/about",{controller:"aboutController",templateUrl:"templates/about.html"}),
	$routeProvider.when("/players",{controller:"playersController",templateUrl:"templates/players.html"}),
	$routeProvider.when("/contact",{controller:"contactController",templateUrl:"templates/contact.html"}),
	$routeProvider.when("/fightcard",{controller:"fightcard",templateUrl:"templates/fightcard.html"}),
	$routeProvider.otherwise({redirectTo:"/"})}]);

