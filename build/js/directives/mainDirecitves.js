app.directive("slider",["$timeout",function(e)
	{return{restrict:"AE",replace:!0,templateUrl:"templates/slider.html"}}]);

app.directive('toggleClass', function() {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
          element.on('click', function() {
              element.toggleClass(attrs.toggleClass);
          });
      }
  };
});
app.directive('upTop', function() {
  return {
      restrict: 'AE',
      template:'<button class="upTop">up</button>',
      link: function(scope, element,attr) {
           element.on('click', function() {
                $("body").animate({scrollTop: document.getElementById(attr.where).offsetTop}, "slow");
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
app.directive('svgFist', function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'svg/icon-fist.html'
  };
});
app.directive('svgBoxer', function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'svg/icon-boxer.html'
  };
});
app.directive('svgMircophone', function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'svg/icon-microphone.html'
  };
});
app.directive('svgTick', function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'svg/icon-tick.html'
  };
});
