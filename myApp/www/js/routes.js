angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.NameSConversations'
      2) Using $state.go programatically:
        $state.go('tabsController.NameSConversations');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab2/page2
  */
  .state('tabsController.NameSConversations', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/NameSConversations.html',
        controller: 'NameSConversationsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/NameSConversations.html',
        controller: 'NameSConversationsCtrl'
      }
    }
  })

  .state('tabsController.startAConversation', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/startAConversation.html',
        controller: 'startAConversationCtrl'
      }
    }
  })

  .state('tabsController.conversationStarted', {
    url: '/page11',
    views: {
      'tab2': {
        templateUrl: 'templates/conversationStarted.html',
        controller: 'conversationStartedCtrl'
      }
    }
  })

  .state('tabsController.conversationEnded', {
    url: '/page14',
    views: {
      'tab2': {
        templateUrl: 'templates/conversationEnded.html',
        controller: 'conversationEndedCtrl'
      }
    }
  })

  .state('tabsController.conversationSaved', {
    url: '/page15',
    views: {
      'tab2': {
        templateUrl: 'templates/conversationSaved.html',
        controller: 'conversationSavedCtrl'
      }
    }
  })

  .state('tabsController.analytics', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/analytics.html',
        controller: 'analyticsCtrl'
      }
    }
  })

  .state('tabsController.analyticsChild', {
    url: '/page13/:childId',
    views: {
      'tab3': {
        templateUrl: 'templates/analytics.child.html',
        controller: 'analyticsChildCtrl',

      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.login', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.signup', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.myCollections'
      2) Using $state.go programatically:
        $state.go('tabsController.myCollections');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
  */
  .state('tabsController.myCollections', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/myCollections.html',
        controller: 'myCollectionsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/myCollections.html',
        controller: 'myCollectionsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.addChild'
      2) Using $state.go programatically:
        $state.go('tabsController.addChild');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page9
      /page1/tab2/page9
  */
  .state('tabsController.addChild', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/addChild.html',
        controller: 'addChildCtrl'
      },
      'tab2': {
        templateUrl: 'templates/addChild.html',
        controller: 'addChildCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/page12',
    views: {
      'tab2': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.ConversationTitle'
      2) Using $state.go programatically:
        $state.go('tabsController.ConversationTitle');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page16
      /page1/tab2/page16
  */
  .state('tabsController.ConversationTitle', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/ConversationTitle.html',
        controller: 'ConversationTitleCtrl'
      },
      'tab2': {
        templateUrl: 'templates/ConversationTitle.html',
        controller: 'ConversationTitleCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page3')

  

});