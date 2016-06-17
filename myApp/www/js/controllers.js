angular.module('app.controllers', [])
  
.controller('NameSConversationsCtrl', function($scope) {

})
   
.controller('startAConversationCtrl', function($scope) {

})
   
.controller('conversationStartedCtrl', function($scope) {

})
   
.controller('conversationEndedCtrl', function($scope) {

})
   
.controller('conversationSavedCtrl', function($scope) {

})

// TODO: Need to limit the controller to accept a userId based on the logged in user
// -- Also need to limit the children available to the user
.controller('analyticsCtrl', function($scope, dataBase) {
  $scope.Users = dataBase.Users;
  $scope.Children = dataBase.Children;
  dataBase.getUserById(1);
  console.log(dataBase.getUserById(1));
})

.controller('analyticsChildCtrl', function($scope, dataBase, $stateParams) {
  //$scope.child = $stateParams.child;
  console.log($stateParams);
  console.log(dataBase.getChildById(21));
})
      
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('myCollectionsCtrl', function($scope) {

})
   
.controller('addChildCtrl', function($scope) {

})
   
.controller('settingsCtrl', function($scope) {

})
   
.controller('ConversationTitleCtrl', function($scope) {

})
 