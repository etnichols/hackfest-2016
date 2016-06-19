angular.module('app.services', [])

.service('dataBase', function(){
    var dataBase = this;
    dataBase.Users =
    [
        {
            UserId: 1,
            Name: "Eddard Stark",
            Email: "Eddard.Stark@gmail.com",
            UserName: "EStark",
            Password: "EStark1",
            ImgPath: "img/empty-profile.png",
            CreatedAt: "2012-04-23T18:25:43.511Z",
            UpdatedAt: "2013-06-14T13:42:43.823Z",
            Enabled: "True"
        },{
            UserId: 2,
            Name: "Cersei Lannister",
            Email: "Cersei.Lannister@gmail.com",
            UserName: "CLannister",
            Password: "CLannister",
            ImgPath: "img/empty-profile.png",
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
            ImgPath: "img/empty-profile.png",
            CreatedAt: "2014-02-17T17:25:43.514Z",
            UpdatedAt: "2015-07-18T09:23:41.763Z"
        },{
            ChildId: 21,
            ParentId: 2,
            Name: "Joffrey Baratheon",
            BirthDay: "2014-11-23T00:00:00.000Z",
            ImgPath: "img/empty-profile.png",
            CreatedAt: "2014-11-28T14:15:43.514Z",
            UpdatedAt: "2015-01-02T12:23:41.763Z"
        },{
            ChildId: 12,
            ParentId: 1,
            Name: "Sansa Stark",
            BirthDay: "2010-04-02T00:00:00.000Z",
            ImgPath: "img/empty-profile.png",
            CreatedAt: "2011-03-24T02:14:23.514Z",
            UpdatedAt: "2013-12-18T21:52:42.763Z"
        },{
            ChildId: 22,
            ParentId: 2,
            Name: "Tommen Baratheon",
            BirthDay: "2015-03-24T00:00:00.000Z",
            ImgPath: "img/empty-profile.png",
            CreatedAt: "2015-05-11T14:42:43.514Z",
            UpdatedAt: "2015-08-12T16:04:41.763Z"
        }
    ];

    dataBase.Conversations = 
    [
        {
            ConversationId: 121,
            ChildId: 12,
            Conversation: "we will take back our lands winter is coming dad",
            ConversationTime: 30000
        },{
            ConversationId: 111,
            ChildId: 11,
            Conversation: "i am very cold yet i still feel the need to go north",
            ConversationTime: 40000
        },{
            ConversationId: 211,
            ChildId: 21,
            Conversation: "i am the greatest hunter oh my god what is that oh just a squirrel i knew that",
            ConversationTime: 150000
        },{
            ConversationId: 221,
            ChildId: 22,
            Conversation: "i don't know what to do i want to follow him but i need to help her",
            ConversationTime: 60000
        },{
            ConversationId: 112,
            ChildId: 11,
            Conversation: "this was a mistake winter is definitely coming",
            ConversationTime: 20000
        },{
            ConversationId: 212,
            ChildId: 21,
            Conversation: "maybe i am a jerk",
            ConversationTime: 10000
        },{
            ConversationId: 213,
            ChildId: 21,
            Conversation: "no everyone adores me that can't be right",
            ConversationTime: 40000
        },{
            ConversationId: 122,
            ChildId: 12,
            Conversation: "i'm not a huge fan of my current situation",
            ConversationTime: 70000
        }
    ];
    
    dataBase.Analytics =
    [
        {
            AnalyticsId: 29384,
            ChildId: 11,
            TotalWords: 20,
            LongestWords: "definitely",
            ConversationTime: 60000,
            ConversationsLogged: 2
        },{
            AnalyticsId: 28374,
            ChildId: 21,
            TotalWords: 24,
            LongestWords: "greatest",
            ConversationTime: 200000,
            ConversationsLogged: 3
        },{
            AnalyticsId: 85849,
            ChildId: 12,
            TotalWords: 19,
            LongestWords: "situation",
            ConversationTime: 100000,
            ConversationsLogged: 2
        },{
            AnalyticsId: 34832,
            ChildId: 22,
            TotalWords: 13,
            LongestWords: "follow",
            ConversationTime: 60000,
            ConversationsLogged: 1
        }
    ];

    dataBase.WordBank = 
    [
        {
            WordBankId: 1234,
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
            WordBankId: 2342,
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
});
