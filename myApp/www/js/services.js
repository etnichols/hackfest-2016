angular.module('app.services', [])

.service('dataBase', function(){
    var dataBase = this;
    dataBase.Users =
    [
        {
            id: 1,
            Name: "Eddard Stark",
            Email: "Eddard.Stark@gmail.com",
            Username: "EStark",
            Password: "EStark1",
            UserImgPath: "img/empty-profile.png",
            CreatedAt: "2012-04-23T18:25:43.511Z",
            UpdatedAt: "2013-06-14T13:42:43.823Z",
            Enabled: "True"
        },{
            id: 2,
            Name: "Cersei Lannister",
            Email: "Cersei.Lannister@gmail.com",
            Username: "CLannister",
            Password: "CLannister",
            UserImgPath: "img/empty-profile.png",
            CreatedAt: "2011-01-17T10:01:32.421Z",
            UpdatedAt: "2014-12-11T12:35:26.938Z",
            Enabled: "True"
        }
    ];
    
    dataBase.Children = 
    [
        {
            ChildId: 11,
            ParentId: 1,
            Name: "John Snow",
            BirthDay: "2012-06-14T00:00:00.000Z",
            ChildImgPath: "img/empty-profile.png",
            CreatedAt: "2014-02-17T17:25:43.514Z",
            UpdatedAt: "2015-07-18T09:23:41.763Z"
        },{
            ChildId: 21,
            ParentId: 2,
            Name: "Joffrey Baratheon",
            BirthDay: "2014-11-23T00:00:00.000Z",
            ChildImgPath: "img/empty-profile.png",
            CreatedAt: "2014-11-28T14:15:43.514Z",
            UpdatedAt: "2015-01-02T12:23:41.763Z"
        },{
            ChildId: 12,
            ParentId: 1,
            Name: "Sansa Stark",
            BirthDay: "2010-04-02T00:00:00.000Z",
            ChildImgPath: "img/empty-profile.png",
            CreatedAt: "2011-03-24T02:14:23.514Z",
            UpdatedAt: "2013-12-18T21:52:42.763Z"
        },{
            ChildId: 22,
            ParentId: 2,
            Name: "Tommen Baratheon",
            BirthDay: "2015-03-24T00:00:00.000Z",
            ChildImgPath: "img/empty-profile.png",
            CreatedAt: "2015-05-11T14:42:43.514Z",
            UpdatedAt: "2015-08-12T16:04:41.763Z"
        }
    ];

    dataBase.Conversations = 
    [
        {
            ConversationId: 121,
            ChildID: 12,
            Conversation: "we will take back our lands winter is coming dad",
            ConversationTime: 30000
        },{
            ConversationId: 111,
            ChildID: 11,
            Conversation: "i am very cold yet i still feel the need to go north",
            ConversationTime: 40000
        },{
            ConversationId: 211,
            ChildID: 21,
            Conversation: "i am the greatest hunter oh my god what is that oh just a squirrel i knew that",
            ConversationTime: 150000
        },{
            ConversationId: 221,
            ChildID: 22,
            Conversation: "i don't know what to do i want to follow him but i need to help her",
            ConversationTime: 60000
        },{
            ConversationId: 112,
            ChildID: 11,
            Conversation: "this was a mistake winter is definitely coming",
            ConversationTime: 20000
        },{
            ConversationId: 212,
            ChildID: 21,
            Conversation: "maybe i am a jerk",
            ConversationTime: 10000
        },{
            ConversationId: 213,
            ChildID: 21,
            Conversation: "no everyone adores me that can't be right",
            ConversationTime: 40000
        },{
            ConversationId: 122,
            ChildID: 12,
            Conversation: "i'm not a huge fan of my current situation",
            ConversationTime: 70000
        }
    ];
    
    dataBase.Analytics =
    [
        {
            AnalyticsId: 29384,
            ChildID: 11,
            TotalWords: 20,
            LongestWords: "definitely",
            ConversationTime: 60000,
            ConversationsLogged: 2
        },{
            AnalyticsId: 28374,
            ChildID: 21,
            TotalWords: 24,
            LongestWords: "greatest",
            ConversationTime: 200000,
            ConversationsLogged: 3
        },{
            AnalyticsId: 85849,
            ChildID: 12,
            TotalWords: 19,
            LongestWords: "situation",
            ConversationTime: 100000,
            ConversationsLogged: 2
        },{
            AnalyticsId: 34832,
            ChildID: 22,
            TotalWords: 13,
            LongestWords: "follow",
            ConversationTime: 60000,
            ConversationsLogged: 1
        }
    ];

    dataBase.Wordbank = 
    [
        {
            WordbankId: 1234,
            ChildUse:
            [
              {
                id: 11,
                Count: 2
              },
              {
                id: 21,
                Count: 3
              },
              {
                id: 22,
                Count: 3
              }
            ],
            Word: "i"
        },{
            WordbankId: 2342,
            ChildUse:
            [
              {
                id: 11,
                Count: 1
              },
              {
                id: 21,
                Count: 2
              }
            ],
            Word: "am"
        }
    ];

        /******************************************************************************
Methods for Creating or Deleting User Profiles
******************************************************************************/

function addNewUser(tempName, userEmail, userName,
                    UserPassword, ImgPath, UserCreatedAt,
                    UserUpdatedAt, UserEnabled){
  var tempId = 1;

  for(User in Users){
    if(User.id >= tempid){
      tempid = User.id++;
    }
  }

  var obj = {
    id: tempId,
    Name: tempName,
    Email: userEmail,
    Username: userName,
    Password: UserPassword,
    UserImgPath: ImgPath,
    CreatedAt: UserCreatedAt,
    UpdatedAt: UserUpdatedAt,
    Enabled, UserEnabled
  }

  Users.push(obj);
};

function deleteUser(userObj){
  var i = 0;
  for(User in this.Users){
    if(User === userObj){
      Users.splice(i,1);
      break;
    }
    i++;
  }
};

/******************************************************************************
Methods for Getting of User by Known Params
******************************************************************************/

dataBase.getUserById = function(userId){
    for(var user in this.Users){
        if(user.id == userId){
            return user;
        }
    }
};

function getUserByName(name){
  for(User in Users){
    if(User.Name === name){
      return User;
    }
  }
};

function getUserByEmail(userEmail){
  for(User in Users){
    if(User.Email === userEmail){
      return User;
    }
  }
};

function getUserByUserNameAndPassword(userName, Password){
  for(User in Users){
    if(User.Username === userName && User.Password === Password){
      return User;
    }
  }
};

/******************************************************************************
Methods for Getting and Setting of User Params
******************************************************************************/

function getUsersId(UserObj){
  for(User in Users){
    if(User === UserObj){
      return User.id;
    }
  }
};

function getUsersName(UserObj){
  for(User in Users){
    if(User === UserObj){
      return User.Name;
    }
  }
};

function setUsersName(UserObj, name){
  for(User in Users){
      if(User === UserObj){
        User.Name = name;
        break;
      }
    }
};

function getUsersEmail(UserObj){
  for(User in Users){
    if(User === UserObj){
      return User.Email;
    }
  }
};

function setUsersEmail(UserObj, email){
  for(User in Users){
      if(User === UserObj){
        User.Email = email;
        break;
      }
    }
};

function getUsersUsername(UserObj){
  for(User in Users){
    if(User === UserObj){
      return User.Username;
    }
  }
};

function setUsersUserName(UserObj, name){
  for(User in Users){
      if(User === UserObj){
        User.Username = name;
        break;
      }
    }
};

function getUsersPassword(UserObj){
  for(User in Users){
    if(User === UserObj){
      return User.Password;
    }
  }
};

function setUsersPassword(UserObj, pass){
  for(User in Users){
      if(User === UserObj){
        User.Password = pass;
        break;
      }
    }
};

function getUsersImagePath(UserObj){
  for(User in Users){
    if(User === UserObj){
      return User.UserImgPath;
    }
  }
};

function setUsersImagePath(UserObj, imgPath){
  for(User in Users){
      if(User === UserObj){
        User.UserImgPath = imgPath;
        break;
      }
    }
};

function getUsersCreatedAt(UserObj){
  for(User in Users){
    if(User === UserObj){
      return User.CreatedAt;
    }
  }
};

function setUsersCreatedAt(UserObj, createdAt){
  for(User in Users){
      if(User === UserObj){
        User.CreatedAt = createdAt;
        break;
      }
    }
};

function getUsersUpdatedAt(UserObj){
  for(User in Users){
    if(User === UserObj){
      return User.UpdatedAt;
    }
  }
};

function setUsersUpdatedAt(UserObj, updatedAt){
  for(User in Users){
      if(User === UserObj){
        User.UpdatedAt = updatedAt;
        break;
      }
    }
};

function getUsersIsEnabled(UserObj){
  for(User in Users){
    if(User === UserObj){
      return User.Enabled;
    }
  }
};

function setUsersIsEnabled(UserObj, enable){
  for(User in Users){
      if(User === UserObj){
        User.Enabled = enable;
        break;
      }
    }
};

/******************************************************************************
Methods for Creating or Deleting Childen
******************************************************************************/

function createChild(ParId, childName, BDay, ImgPath,
                      Created, Updated){
  var tempId = 1;

  for(Child in Children){
    if(Child.ChildId >= tempId){
      tempId = Child.ChildId++;
    }
  }

  var obj = {
    ChildId: tempId,
    ParentId: ParId,
    Name: childName,
    BirthDay: BDay,
    ChildImgPath: ImgPath,
    CreatedAt: Created,
    UpdatedAt: Updated
  }

  Children.push(obj);
};

function deleteChild(childObj){
  var i = 0;
  for(Child in Children){
    if(Child === childObj){
      Children.splice(i,1);
      break;
    }
    i++;
  }
};

/******************************************************************************
Methods for Getting of Children by Known Params
******************************************************************************/

this.getChildById = function(childId){
    for(var child in this.Children){
        if(child.childId == childId){
            return child;
        }
    }
};

function getChildsChildId(childObj){
  for(Child in Children){
    if(Child === childObj){
      return Child.ChildId;
    }
  }
};

function getChildsParentId(childObj){
  for(Child in Children){
    if(Child === childObj){
      return Child.ParentId;
    }
  }
};

function getChildsName(childObj){
  for(Child in Children){
    if(Child === childObj){
      return Child.Name;
    }
  }
};

function setChildsName(childObj, name){
  for(Child in Children){
    if(Child === childObj){
      Child.Name = name;
      break;
    }
  }
};

function getChildsBirthDay(childObj){
  for(Child in Children){
    if(Child === childObj){
      return Child.BirthDay;
    }
  }
};

function setChildsBirthDay(childObj, Bday){
  for(Child in Children){
    if(Child === childObj){
      Child.BirthDay = Bday;
      break;
    }
  }
};

function getChildsImgPath(childObj){
  for(Child in Children){
    if(Child === childObj){
      return Child.ChildImgPath;
    }
  }
};

function setChildsImgPath(childObj, ImgPath){
  for(Child in Children){
    if(Child === childObj){
      Child.ChildImgPath = ImgPath;
      break;
    }
  }
};

function getChildsCreatedAt(childObj){
  for(Child in Children){
    if(Child === childObj){
      return Child.CreatedAt;
    }
  }
};

function setChildsCreatedAt(childObj, createdAt){
  for(Child in Children){
    if(Child === childObj){
      Child.CreatedAt = createdAt;
      break;
    }
  }
};

function getChildsUpdatedAt(childObj){
  for(Child in Children){
    if(Child === childObj){
      return Child.UpdatedAt;
    }
  }
};

function setChildsUpdatedAt(childObj, updatedAt){
  for(Child in Children){
    if(Child === childObj){
      Child.UpdatedAt = updatedAt;
      break;
    }
  }
};

/******************************************************************************
Methods for Getting of Analytics by Known Params
******************************************************************************/

function getAnalyticsByChildId(childId){
  for(analytic in startData.Analytics){
    if(analytic.ChildID == childId){
      return analytic;
    }
  }
};
});
