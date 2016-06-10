app.controller('NavController', function ($scope, $timeout, $mdSidenav, $log) {
  var nav = this;

  nav.locations = [
    {
      "name": "Dashboard",
      "partial": "/dashboard"
    },
    {
      "name": "Commands",
      "partial": "/commands"
    },
    {
      "name": "Quotes",
      "partial": "/quotes"
    }
  ]

  nav.toggle = buildDelayedToggler('left');

  function debounce(func, wait, context) {
    var timer;
    return function debounced() {
      var context = nav,
          args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }

  function buildDelayedToggler(navID) {
    return debounce(function() {
      $mdSidenav(navID).toggle()
    }, 200);
  }

  nav.close = function () {
    $mdSidenav('left').close()
  };
})
