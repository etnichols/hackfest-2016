angular.module('app.controllers', ['ngOpenFB'])

////////////////////////////////////////////////////////////////////////////////
//
//   User login/signup/settings controllers
//
////////////////////////////////////////////////////////////////////////////////

.controller('loginCtrl', function ($scope, dataBase, $rootScope, $state, $ionicPopup, $ionicHistory, $timeout, ngFB) {
    $scope.login = function(user) {
        var usr = getUserByLogin(dataBase.Users, user.userName, user.password);

        // If a match was found, enter the application, otherwise, alert invalid
        if(usr != null) {
            $rootScope.user = usr;

            // Clear the input fields
            $("#login-username-field, #login-password-field").val("");

            $ionicHistory.clearHistory();
            $state.go("tabsController.startConversation");
        }
        else {
            $scope.showInvalidCredentials();
        }
    }

    // OpenFB fblogin function
    $scope.fbLogin = function () {
    ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $scope.closeLogin();
            } else {
                alert('Facebook login failed');
            }
        });
    };

    $scope.showInvalidCredentials = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Invalid username/password',
            template: 'Please try again.'
        });

        $timeout(function() {
            alertPopup.close(); //close the popup after 3 seconds for some reason
        }, 3000);
    };
})
.controller('signupCtrl', function ($scope, dataBase, $rootScope, $state, $ionicPopup) {
    $scope.register = function(user) {
        // Confirm no user with input userName or email exists
        if(!getUserByUserName(dataBase.Users, user.userName)) {
            if(!getUserByEmail(dataBase.Users, user.email)) {
                $rootScope.user = addUser(dataBase.Users, user.name, user.email, user.userName, user.password, "", true);
                $state.go("login");
            }
            else {
                $scope.showInvalidEmail();
            }
        }
        else {
            $scope.showInvalidUserName();
        }
    }

    $scope.showInvalidUserName = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Username in use',
            template: 'That username unavailable, please try again with a different one.'
        });
    };

    $scope.showInvalidEmail = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Email in use',
            template: 'That email address is already registered. Please login or try again with a different one.'
        });
    };
})
.controller('delChildCtrl', function ($scope, dataBase, $rootScope, $state, $ionicPopup) {
    if(validateUser($rootScope, $state)) {
      $scope.children = getChildren(dataBase, $rootScope.user.UserId);
      $scope.child = {};
      $scope.delChild = function(child) {
          deleteChild(dataBase, child.ChildId);

          var alertPopup = $ionicPopup.alert({
              title: 'Child deleted!'
          });

          $state.go("tabsController.collections");
      };
    }
})

////////////////////////////////////////////////////////////////////////////////
//
//   Collections controllers (Tab 1)
//
////////////////////////////////////////////////////////////////////////////////

.controller('collectionsCtrl', function ($scope, dataBase, $rootScope, $state) {
    $scope.$on('$ionicView.enter', function() {
        if(validateUser($rootScope, $state)) {
            $scope.user = $rootScope.user;
            $scope.children = getChildren(dataBase, $scope.user.UserId);
        }
    });
})
.controller('addChildCtrl', function ($scope, dataBase, $rootScope, $state, $ionicPopup) {
    if(validateUser($rootScope, $state)) {
        $scope.addChild = function(child) {
            addChild(dataBase, $rootScope.user.UserId, child.name, child.birthday, "");
            var alertPopup = $ionicPopup.alert({
                title: 'Child created!'
            });

            $state.go("tabsController.collections");
        };
    }
})
.controller('collectionsChildCtrl', function ($scope, dataBase, $stateParams, $rootScope, $state) {
    $scope.$on('$ionicView.enter', function() {
        if(validateUser($rootScope, $state)) {
            $scope.child = getChildById(dataBase.Children, $stateParams.childId);

            // Get all conversations
            $scope.conversations = getConversations(dataBase.Conversations, $scope.child.ChildId);
        }
    });
})
.controller('conversationCtrl', function ($scope, dataBase, $stateParams, $rootScope, $state) {
    $scope.$on('$ionicView.enter', function() {
        if(validateUser($rootScope, $state)) {
            $scope.conversation = getConversationById(dataBase.Conversations, $stateParams.conversationId);
        }
    });
})

////////////////////////////////////////////////////////////////////////////////
//
//   Conversations controllers (Tab 2)
//
////////////////////////////////////////////////////////////////////////////////

.controller('startConversationCtrl', function ($scope, $rootScope, $state, $ionicHistory) {
     $scope.$on('$ionicView.enter', function() {
        if(validateUser($rootScope, $state)) {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
        }
    });
})
.controller('conversationInProgressCtrl', function ($scope, dataBase, $rootScope, $state, $ionicHistory) {
    $scope.$on('$ionicView.enter', function() {
        if(validateUser($rootScope, $state)) {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $("#convProgressText").val("");
        }
    });

    $scope.saveTempConv = function(conversation) {
        dataBase.tempConversation = conversation;
        $state.go("tabsController.conversationEnded");
    }
})
.controller('conversationEndedCtrl', function ($scope, dataBase, $rootScope, $state, $ionicHistory, $ionicPopup) {
    $scope.$on('$ionicView.enter', function() {
        if(validateUser($rootScope, $state)) {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $scope.children = getChildren(dataBase, $rootScope.user.UserId);
            $scope.conv = {};
            $scope.tempConv = dataBase.tempConversation;
        }
    });

    // Same conversation from form data and alert user of success
    $scope.saveConversation = function(conversation) {
        if(conversation.ChildId && conversation.Name) {
            createConversation(dataBase, conversation.ChildId, $scope.tempConv, conversation.Name, 10000);

            var alertPopup = $ionicPopup.alert({
                title: "Conversation saved!"
            });

            alertPopup.then(function(res) {
                $state.go("tabsController.startConversation");
                $ionicHistory.clearHistory();
            });
        }
    }
})
.controller('settingsCtrl', function ($scope, dataBase, $rootScope, $state, $ionicHistory, $ionicPopup) {
    if(validateUser($rootScope, $state)) {
        $scope.user = $rootScope.user;
        $scope.settings = {};

        $scope.logout = function() {
            $ionicHistory.clearHistory();
            $rootScope.user = null;
            $state.go("login");
        }

        $scope.cancel = function() {
            $ionicHistory.goBack();
        }

        $scope.changePassword = function() {
            // An elaborate, custom popup
            var passwordPopup = $ionicPopup.show({
                template: '<input type="password" ng-model="settings.password">',
                title: 'Change password',
                subTitle: 'Please enter your new password',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if (!$scope.settings.password) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                $scope.user.Password = $scope.settings.password;
                                $scope.showAlert("Password updated!");
                            }
                        }
                    }
                ]
            });

            passwordPopup.then(function(res) {
            });
        };

        $scope.saveChanges = function() {
            if($scope.settings.Name) {
                $scope.user.Name = $scope.settings.Name;
            }
            if($scope.settings.Email) {
                $scope.user.Email = $scope.settings.Email;
            }

            $scope.showAlert("Information updated!");
        }

        $scope.showAlert = function(title) {
            var alertPopup = $ionicPopup.alert({
                title: title
            });

            alertPopup.then(function(res) {
                $ionicHistory.goBack();
            });
        }
    }

    $("#settingsName, #settingsEmail").on("input", function() {
        $("#settingsSaveButton").removeAttr("disabled");
    });
})

////////////////////////////////////////////////////////////////////////////////
//
//   Analytics Controllers (Tab 3)
//
////////////////////////////////////////////////////////////////////////////////

.controller('analyticsCtrl', function ($scope, dataBase, $rootScope, $state) {
    $scope.$on('$ionicView.enter', function() {
        if(validateUser($rootScope, $state)) {
            $scope.user = $rootScope.user;
            $scope.children = getChildren(dataBase, $scope.user.UserId);
        }
    });
})
.controller('analyticsChildCtrl', function ($scope, dataBase, $stateParams, $rootScope, $state) {
    $scope.$on('$ionicView.enter', function() {
        if(validateUser($rootScope, $state)) {
            $scope.child = getChildById(dataBase.Children, $stateParams.childId);
            $scope.analytics = getAnalyticsByChildId(dataBase.Analytics, $stateParams.childId);

            // Make sure there's data to show
            if($scope.analytics == null || $scope.child == null) {
                $state.go("tabsController.analytics");
            }

            // Calculate chart data
            var labels = [];
            var data = [];

            var yearStart = 2011;
            var dataSize = 6;
            var wordsKnown = 0;

            for(var i = 0; i < dataSize; i++) {
                labels.push(yearStart + i);
                data.push(0);
            }

            // Performance hindering function (parse whole wordbank)
            // TODO: Get mySQL running
            dataBase.WordBank.some(function (word) {
                // Check if this child has spoken this word
                word.ChildUse.some(function (child) {
                    // Child has spoken this word
                    if(child.ChildId == $scope.child.ChildId) {
                        var dateLearned = new Date(child.Created);
                        var yearLearned = dateLearned.getFullYear();

                        if(yearLearned >= yearStart && yearLearned <= yearStart + dataSize) {
                            data[yearLearned - yearStart]++;
                        }

                        wordsKnown++;

                        return true;
                    }
                });
            });

            $scope.analytics.TotalWords = wordsKnown;
            $scope.labels = labels;
            $scope.data = [data];
        }
    });
});

/**
 * Determines whether or not a valid user has logged into the application
 * @param  $rootScope - the angular rootScope object
 * @param  $state     - the angular state object
 * @return            - true if the rootScope.user object is not null
 */
function validateUser($rootScope, $state) {
    if($rootScope.user == null) {
        $state.go("login");
        return false;
    }

    return true;
}

////////////////////////////////////////////////////////////////////////////////
//
//   Database API (order: users, children, conversations, analytics, wordbank)
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
 * @param enabled  - the state of the users account, true if access is allowed
 */
function addUser(users, name, email, userName, password, enabled) {
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
        CreatedAt: now,
        UpdatedAt: now,
        Enabled: enabled
    };

    users.push(usr);
    return usr;
}

/**
 * Returns a user's children from the database
 * @param  dataBase - the dataBase JSON object
 * @param  userId   - the userId of the deleted user
 */
function getChildren(dataBase, userId) {
    var children = [];

    dataBase.Children.some(function (child) {
        if(child.ParentId == userId) {
            children.push(child);
        }
    });

    return children;
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
 * Removes a child's analytic object from the database
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
 * Removes a child's wordbank objects from the database
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
 * Removes a child's conversation objects from the database
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
 * Returns a user object based off of their UserName, if they exist
 * @param  users    - the users JSON object in the database service
 * @param  userName - the userName of the user to be retrieved
 */
function getUserByUserName(users, userName) {
    var usr = null;

    users.some(function (user) {
        if(user.UserName == userName) {
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
function addChild(dataBase, userId, name, birthDay, imgPath) {
    var now = new Date();
    var tempId = 1;

    dataBase.Children.some(function (child) {
        if (child.ChildId >= tempId) {
            tempId = child.ChildId + 1;
        }
    });

    if(imgPath == "") {
        imgPath = "img/empty-profile.png";
    }

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

    dataBase.Children.push(chld);

    var tempAnalyticId = 0;

    dataBase.Analytics.some(function (analytic) {
        if (analytic.AnalyticsId >= tempAnalyticId) {
            tempAnalyticId = analytic.AnalyticsId + 1;
        }
    });

    var analytic =
    {
        AnalyticsId: tempAnalyticId,
        ChildId: tempId,
        TotalWords: 0,
        LongestWord: "",
        ConversationTime: 0,
        ConversationsLogged: 0
    };

    dataBase.Analytics.push(analytic);
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
 * Adds a new child to the database
 * @param children - the children JSON object in the database service
 * @param userId   - the userId of the parent of this child
 * @param name     - the name of the child to be added
 * @param birthDay - the birthday of the child to be added
 * @param imgPath  - the path of the profile image of the child to be added
 */
function createConversation(dataBase, childId, transcript, name, convTime) {
    var now = new Date();
    var tempId = 1;

    dataBase.Conversations.some(function (conv) {
        if (conv.ConversationId >= tempId) {
            tempId = conv.ConversationId + 1;
        }
    });

    // Parse transcript for words
    var parsedTranscript = transcript.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    parsedTranscript = transcript.replace(/\s{2,}/g," ");

    var words = parsedTranscript.split(" ").slice().sort(),
        analytics = getAnalyticsByChildId(dataBase.Analytics, childId),
        longestWord = words[0],
        uniqueWords = 0;

    for(var i = 0; i < words.length - 1; i++) {
        if(words[i + 1] != words[i]) {
            uniqueWords++;
            if(i + 1 == words.length - 1) {
                uniqueWords++;
            }
        }
    }

    if(words.length == 1) {
        uniqueWords = 1;
    }

    for(var i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();

        if(words[i].length > longestWord.length) {
            longestWord = words[i];
        }

        addWordToWordBank(dataBase.WordBank, childId, words[i]);
    }

    // Update analytics
    if(longestWord.length > analytics.LongestWord.length) {
        analytics.LongestWord = longestWord;
    }

    analytics.ConversationsLogged++;
    analytics.ConversationTime += convTime;

    // Create and add the object
    var conv =
    {
        ConversationId: tempId,
        ChildId: childId,
        Conversation: transcript,
        UniqueWords: uniqueWords,
        LongestWord: longestWord,
        Name: name,
        Date: now,
        ConversationTime: convTime
    };

    dataBase.Conversations.push(conv);
    getChildById(dataBase.Children, childId).UpdatedAt = now;
}

/**
 * Returns an array of conversations corresponding to a childId
 * @param  conversations - the conversations JSON object in the database service
 * @param  childId       - the childId of the converations to be retrieved
 * @return               - an array of conversations corresponding to this childId
 */
function getConversations(conversations, childId) {
    var convs = [];

    conversations.some(function (conversation) {
        if(conversation.ChildId == childId) {
            convs.push(conversation);
        }
    });

    return convs;
}

/**
 * Returns a conversation object based off of a conversationId
 * @param  conversations  - the conversations JSON object in the database service
 * @param  conversationid - the conversationId of the conversation to be retrieved
 * @return                - the conversation corresponding to conversationId
 */
function getConversationById(conversations, conversationId) {
    var conv;

    conversations.some(function (conversation) {
        if (conversation.ConversationId == conversationId) {
            conv = conversation;
            return true;
        }
    });
    return conv;
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

/**
 * Adds a new child to the database
 * @param children - the children JSON object in the database service
 * @param userId   - the userId of the parent of this child
 * @param name     - the name of the child to be added
 * @param birthDay - the birthday of the child to be added
 * @param imgPath  - the path of the profile image of the child to be added
 */
function addWordToWordBank(wordbank, childId, word) {
    var now = new Date(),
        exit = false,
        tempId = 0;

    wordbank.some(function (wordBankWord) {
        if(wordBankWord.Word == word) {
            wordBankWord.ChildUse.some(function (childWord) {
                if(childWord.ChildId == childId) {
                    childWord.Count++;
                    exit = true;
                }

                return exit;
            });

            if(!exit) {
                var chldUse =
                {
                    ChildId: childId,
                    Count: 1,
                    Created: now
                };
                wordBankWord.ChildUse.push(chldUse);
                exit = true;
            }
        }
        if(wordBankWord.WordBankId > tempId) {
            tempId = wordBankWord.WordBankId;
        }

        return exit;
    });

    // Word doesn't exist in database
    if(!exit) {
        var wrd =
        {
            WordBankId: tempId,
            ChildUse:
            [
              {
                ChildId: childId,
                Count: 1,
                Created: now
              }
            ],
            Word: word
        };
        wordbank.push(wrd);
    }
}
