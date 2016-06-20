angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'chart.js', 'ngOpenFB'])

.run(function($ionicPlatform, ngFB) {
  ngFB.init({appId: '502573359927881'});
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.run(function($rootScope, $state, $ionicConfig) {
    $rootScope.user = null;
    $ionicConfig.navBar.alignTitle('center');
    $state.go("login");
})
