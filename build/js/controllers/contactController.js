app.controller("contactController",["$scope",function($scope){
 $scope.pageClass = 'contact';
 $scope.required = true;
 $scope.check = function(type) {
   var input = $('input.'+type);
   var value = $('input.'+type).val();
   if( value == null || value.length == 0){
   	  input.removeClass('green');
   	  input.addClass('red');
   	  input.next('.message').text("Uzupełnij pole");
   }
   else{
   	 input.removeClass('red');
   	 input.addClass('green');
   	 input.next('.message').text("");
   }
 };

}]);