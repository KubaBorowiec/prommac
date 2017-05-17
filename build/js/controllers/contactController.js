app.controller("contactController",["$scope",function($scope){
	$scope.pageClass = 'contact';
	$scope.required = true;
	$scope.check = function(required,type) {
	   var input = $('input.'+type);
	   var value = $('input.'+type).val();
	    if(required == 1){
			    if( value == null || value.length == 0){
			   	  	input.removeClass('valid');
			   	  	input.addClass('notvalid');
			   	  	input.next('.message').text("Uzupełnij pole");
			    }
			    else{
			   	 	input.removeClass('notvalid');
			   	 	input.addClass('valid');
			   	 	input.next('.message').text("");
			    }
	    };
	}

}]);