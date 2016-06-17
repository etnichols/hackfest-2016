angular.module('app.controllers', [])

.controller('NameSConversationsCtrl', function ($scope) {

})

.controller('startAConversationCtrl', function ($scope) {

})

.controller('conversationStartedCtrl', function ($scope) {

})

.controller('conversationEndedCtrl', function ($scope) {

})

.controller('conversationSavedCtrl', function ($scope) {

})

// TODO: Need to limit the controller to accept a userId based on the logged in user
// -- Also need to limit the children available to the user
.controller('analyticsCtrl', function ($scope, dataBase) {
    $scope.Users = dataBase.Users;
    $scope.Children = dataBase.Children;
})

.controller('analyticsChildCtrl', function ($scope, dataBase, $stateParams) {
    $scope.child = getChildById(dataBase.Children, $stateParams.childId);
    $scope.analytics = getAnalyticsByChildId(dataBase.Analytics, $stateParams.childId);
})

.controller('loginCtrl', function ($scope) {

})

.controller('signupCtrl', function ($scope) {

})

.controller('myCollectionsCtrl', function ($scope) {

})

.controller('addChildCtrl', function ($scope) {

})

.controller('settingsCtrl', function ($scope) {

})

.controller('ConversationTitleCtrl', function ($scope) {

});

function getChildById(children, childId) {
    var childObj;

    children.some(function (child) {
        if (child.ChildId == childId) {
            childObj = child;
            return true;
        }
    });
    return childObj;
}

function getAnalyticsByChildId(analytics, childId) {
    var analyticsObj;

    analytics.some(function (analytic) {
        if (analytic.ChildId == childId) {
            analyticsObj = analytic;
            return true;
        }
    });
    return analyticsObj;
}