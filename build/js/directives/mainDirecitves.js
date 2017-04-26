app.directive('slider',['$timeout',function(e)
	{return{restrict:'AE',replace:!0,templateUrl:'templates/slider.html'}}]);

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
app.directive('moveTo', function() {
  return {
      restrict: 'A',
      link: function(scope, element,attr) {
           element.on('click', function() {
                $("body").animate({scrollTop: document.getElementById(attr.moveTo).offsetTop}, "slow");
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
app.directive('countDown', function(){
   return {
    restrict: 'C',
    link:function(scope, element, attrs){
        var e = {},
        date = new Date(attrs.date),
        updateClock = function () {
            e.seconds = (date - new Date())/1000;
            e.timeTillEvent = {
              daysLeft: parseInt(e.seconds/86400),
              hoursLeft: parseInt(e.seconds%86400/3600),
              minutesLeft: parseInt(e.seconds%86400%3600/60),
              secondsLeft: parseInt(e.seconds%86400%3600%60)
            }
            element.text(e.timeTillEvent.daysLeft+'d '+e.timeTillEvent.hoursLeft+'h '+ e.timeTillEvent.minutesLeft + 'm ' +
             e.timeTillEvent.secondsLeft + 's ')
        };

        setInterval(function () {
           updateClock()
        }, 1000);
        
        updateClock();
    }
  };
});



