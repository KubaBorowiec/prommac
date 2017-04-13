app.directive("slider",["$timeout",function(e)
	{return{restrict:"AE",replace:!0,templateUrl:"templates/slider.html"}}]);

app.directive('toggleClass', function() {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
          element.bind('click', function() {
              element.toggleClass(attrs.toggleClass);
          });
      }
  };
});
app.directive('svgClock', function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'svg/icon-clock.html'
  };
});
app.directive('svgPerson', function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'svg/icon-person.html'
  };
});