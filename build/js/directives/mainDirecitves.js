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
app.directive('addClass', function() {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
          element.on('click', function() {
              element.siblings().removeClass(attrs.addClass);
              element.addClass(attrs.addClass);
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
app.directive('svgIcon', function() {
  return {
    restrict: 'AE',
    templateUrl: function(elem, attr) {
      return 'svg/icon-' + attr.type + '.html';
    }
  };
});
app.directive('ratingIcons', function() {
  return {
    restrict: 'AE',
    templateUrl: function(elem, attr) {
      return 'svg/rating.html';
    }
  };
});

