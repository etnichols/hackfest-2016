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

////////////////////////////////////////////////////////////////////////////////
//
//   Database API (order: users, children, conversations, analytics wordbank)
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Adds a new user to the database
 * @param users    - the users JSON object in the database service 
 * @param name     - the name of the user to add
 * @param email    - the email of the user to add
 * @param userName - the username of the user to add
 * @param password - the password of the user to add 
 *                   TODO: Hash the password in this function or beforehand
 * @param imgPath  - the path to the profile image of the user to add
 * @param enabled  - the state of the users account, true if access is allowed
 */
function addUser(users, name, email, userName, password, imgPath, enabled) {
    var now = new Date();
    var tempId = 1;
    
    users.some(function (user) {
        if (user.UserId >= tempId) {
            tempId = user.UserId + 1;
        }
    });

    var usr = 
    {
        UserId: tempId,
        Name: name,
        Email: email,
        UserName: userName,
        Password: password, // TODO: Hash the passwords here.
        ImgPath: imgPath,
        CreatedAt: now,
        UpdatedAt: now,
        Enabled: enabled
    };

    users.push(usr);
}

/**
 * Removes a user from the database
 * @param  dataBase - the dataBase JSON object
 * @param  userId   - the userId of the user to be removed
 */
function deleteUser(dataBase, userId) {
    deleteChildren(dataBase, userId);

    // Remove the user
    dataBase.Users.some(function (user, index) {
        if(user.UserId == userId) {
            dataBase.Users.splice(index, 1);
            return true;
        }
    });
}

/**
 * Removes a user's children from the database
 * @param  dataBase - the dataBase JSON object
 * @param  userId   - the userId of the deleted user
 */
function deleteChildren(dataBase, userId) {
    dataBase.Children.some(function (child, index) {
        if(child.ParentId == userId) {
            deleteChild(dataBase, child.ChildId);
        }
    });
}

/**
 * Removes a children's analytic object from the database
 * @param  dataBase - the dataBase JSON object
 * @param  childId  - the childId of the deleted child
 */
function deleteAnalytics(dataBase, childId) {
    dataBase.Analytics.some(function (analytic, index) {
        if(analytic.ChildId == childId) {
            dataBase.Analytics.splice(index, 1);
            return true;
        }
    });
}

/**
 * Removes a children's wordbank objects from the database
 * @param  dataBase - the dataBase JSON object
 * @param  childId  - the childId of the deleted child
 */
function deleteWordBank(dataBase, childId) {
    dataBase.WordBank.some(function (word, wordIndex) {
        word.ChildUse.some(function (child, childIndex) {
            if(child.id == childId) {
                word.ChildUse.splice(childIndex, 1);
                return true;
            }
        });

        // If the word only belonged to that child, remove it all together
        if(word.ChildUse.length == 0) {
            dataBase.WordBank.splice(wordIndex, 1);
        }
    });
}

/**
 * Removes a children's conversation objects from the database
 * @param  dataBase - the dataBase JSON object
 * @param  childId  - the childId of the deleted child
 */
function deleteConversations(dataBase, childId) {
    dataBase.Conversations.some(function (conversation, index) {
        if(conversation.ChildId == childId) {
            dataBase.Conversations.splice(index, 1);
        }
    });
}

/**
 * Returns a user object based off of their UserId, if they exist
 * @param  users  - the users JSON object in the database service
 * @param  userId - the userId of the user to be retrieved 
 */
function getUserById(users, userId) {
    var usr = null;

    users.some(function (user) {
        if(user.UserId == userId) {
            usr = user;
            return true;
        }
    });
    return usr;
}

/**
 * Returns a user object based off of their email address, if they exist
 * @param  users - the users JSON object in the database service
 * @param  email - the email of the user to be retrieved
 */
function getUserByEmail(users, email) {
    var usr = null;

    users.some(function (user) {
        if(user.Email == email) {
            usr = user;
            return true;
        }
    });
    return usr;
}

/**
 * Returns a user object based off of their login credentials
 * @param  users    - the users JSON object in the database service
 * @param  userName - the username of the user to be retrieved
 * @param  password - the password of the user to be retrieved
 */
function getUserByLogin(users, userName, password) {
    var usr = null;

    users.some(function (user) {
        if(user.UserName === userName && user.Password === password) {
            usr = user;
            return true;
        }
    });
    return usr;
}

/**
 * Adds a new child to the database
 * @param children - the children JSON object in the database service
 * @param userId   - the userId of the parent of this child
 * @param name     - the name of the child to be added
 * @param birthDay - the birthday of the child to be added
 * @param imgPath  - the path of the profile image of the child to be added
 */
function addChild(children, userId, name, birthDay, imgPath) {
    var now = new Date();
    var tempId = 1;
    
    children.some(function (child) {
        if (child.ChildId >= tempId) {
            tempId = child.ChildId + 1;
        }
    });

    var chld = 
    {
        ChildId: tempId,
        ParentId: userId,
        Name: name,
        BirthDay: birthDay,
        ImgPath: imgPath,
        CreatedAt: now,
        UpdatedAt: now
    };

    children.push(chld);
}

/**
 * Removes a child from the database
 * @param  children - the children JSON object in the database service
 * @param  childId  - the childId of the child to be removed
 */
function deleteChild(dataBase, childId) {
    // Clean up the analytic object
    deleteAnalytics(dataBase, childId);

    // Clean up the wordbank objects
    deleteWordBank(dataBase, childId);

    // Clean up the conversation objects
    deleteConversations(dataBase, childId);

    // Remove the child from the database
    dataBase.Children.some(function (child, index) {
        if(child.ChildId == childId) {
            dataBase.Children.splice(index, 1);
            return true;
        }
    });
}

/**
 * Returns a child object based off of their childId
 * @param  children - the children JSON object in the database service
 * @param  childId  - the childId of the child to be retrieved
 */
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

/**
 * Returns an analytics object based off of the child's id that it's associated with
 * @param  analytics - the analytics JSON object in the database service
 * @param  childId   - the childId attached to the analytics object to be retrieved
 */
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