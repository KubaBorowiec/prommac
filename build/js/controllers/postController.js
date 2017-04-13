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