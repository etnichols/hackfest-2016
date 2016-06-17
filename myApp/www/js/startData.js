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
  for(User in Users){
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

function getUserById(userId){
  for(User in Users){
    if(User.id === userId){
      return User;
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

function getChildById(childId){
  for(child in Children){
    if(child.ChildId == childId){
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