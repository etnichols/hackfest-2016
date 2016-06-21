angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // Main Controller
  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  // Login/register controllers
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  // Collections (tab 1)
  .state('tabsController.collections', {
    url: '/page1',
    views: {
      'tab1': {
        templateUrl: 'templates/collections.html',
        controller: 'collectionsCtrl'
      }
    }
  })
  .state('tabsController.addChild', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/addChild.html',
        controller: 'addChildCtrl'
      }
    }
  })
  .state('tabsController.collectionsChild', {
    url:'/page3/:childId',
    views: {
      'tab1': {
        templateUrl: 'templates/collections.child.html',
        controller: 'collectionsChildCtrl'
      }
    }
  })
  .state('tabsController.conversation', {
    url: '/page4/:conversationId',
    views: {
      'tab1': {
        templateUrl: 'templates/conversation.html',
        controller: 'conversationCtrl'
      }
    }
  })

  // Main Page (tab 2)
  .state('tabsController.startConversation', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/startConversation.html',
        controller: 'startConversationCtrl'
      }
    }
  })
  .state('tabsController.conversationInProgress', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/conversationInProgress.html',
        controller: 'conversationInProgressCtrl'
      }
    }
  })
  .state('tabsController.conversationEnded', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/conversationEnded.html',
        controller: 'conversationEndedCtrl'
      }
    }
  })
  .state('tabsController.settings', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  // Analytics (tab 3)
  .state('tabsController.analytics', {
    url: '/page9',
    views: {
      'tab3': {
        templateUrl: 'templates/analytics.html',
        controller: 'analyticsCtrl'
      }
    }
  })
  .state('tabsController.analyticsChild', {
    url: '/page10/:childId',
    views: {
      'tab3': {
        templateUrl: 'templates/analytics.child.html',
        controller: 'analyticsChildCtrl',
      }
    }
  })

  $urlRouterProvider.otherwise('/page1/page5')
});
