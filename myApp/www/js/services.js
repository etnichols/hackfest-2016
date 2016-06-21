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
            CreatedAt: "2012-04-23",
            UpdatedAt: "2013-06-14",
            Enabled: "True"
        },{
            UserId: 2,
            Name: "Cersei Lannister",
            Email: "Cersei.Lannister@gmail.com",
            UserName: "c",
            Password: "c",
            CreatedAt: "2011-01-17",
            UpdatedAt: "2014-12-11",
            Enabled: "True"
        }
    ];
    
    dataBase.Children = 
    [
        {
            ChildId: 11,
            ParentId: 1,
            Name: "John",
            BirthDay: "2012-06-14T00:00:00.000Z",
            ImgPath: "img/john-snow-profile.jpg",
            CreatedAt: "2012-06-27",
            UpdatedAt: "2015-07-18"
        },{
            ChildId: 21,
            ParentId: 2,
            Name: "Joffrey",
            BirthDay: "2014-11-23T00:00:00.000Z",
            ImgPath: "img/joffrey-profile.jpg",
            CreatedAt: "2013-11-28",
            UpdatedAt: "2015-01-02"
        },{
            ChildId: 12,
            ParentId: 1,
            Name: "Sansa",
            BirthDay: "2010-04-02T00:00:00.000Z",
            ImgPath: "img/sansa-profile.jpg",
            CreatedAt: "2011-03-24",
            UpdatedAt: "2013-12-18"
        },{
            ChildId: 22,
            ParentId: 2,
            Name: "Tommen",
            BirthDay: "2015-03-24T00:00:00.000Z",
            ImgPath: "img/tommen-profile.jpg",
            CreatedAt: "2015-05-11",
            UpdatedAt: "2015-08-12"
        }
    ];

    dataBase.Conversations = 
    [
        {
            ConversationId: 121,
            ChildId: 12,
            Conversation: "We will take back our lands winter is coming dad.",
            UniqueWords: 10,
            LongestWord: 'winter',
            Name: 'First day of school',
            Date: "2015-05-11",
            ConversationMinutes: 0,
            ConversationSeconds: 32
        },{
            ConversationId: 111,
            ChildId: 11,
            Conversation: "I am very cold yet I still feel the need to go north.",
            UniqueWords: 12,
            LongestWord: 'still',
            Name: 'First day of school',
            Date: "2015-05-11",
            ConversationMinutes: 0,
            ConversationSeconds: 17
        },{
            ConversationId: 211,
            ChildId: 21,
            Conversation: "I am the greatest hunter oh my god what is that oh just a squirrel I knew that.",
            UniqueWords: 16,
            LongestWord: 'greatest',
            Name: 'First day of school',
            Date: "2015-05-11",
            ConversationMinutes: 0,
            ConversationSeconds: 12
        },{
            ConversationId: 221,
            ChildId: 22,
            Conversation: "I don't know what to do I want to follow him but I need to help her.",
            UniqueWords: 13,
            LongestWord: 'follow',
            Name: '',
            Date: "2015-05-11",
            ConversationMinutes: 0,
            ConversationSeconds: 48
        },{
            ConversationId: 112,
            ChildId: 11,
            Conversation: "This was a mistake winter is definitely coming.",
            UniqueWords: 8,
            LongestWord: 'definitely',
            Name: '',
            Date: "2015-05-11",
            ConversationMinutes: 0,
            ConversationSeconds: 9
        },{
            ConversationId: 212,
            ChildId: 21,
            Conversation: "Maybe I am a jerk.",
            UniqueWords: 5,
            LongestWord: 'maybe',
            Name: '',
            Date: "2015-05-11",
            ConversationMinutes: 0,
            ConversationSeconds: 4
        },{
            ConversationId: 213,
            ChildId: 21,
            Conversation: "No everyone adores me that can't be right.",
            UniqueWords: 8,
            LongestWord: 'everyone',
            Name: '',
            Date: "2015-05-11",
            ConversationMinutes: 0,
            ConversationSeconds: 50
        },{
            ConversationId: 122,
            ChildId: 12,
            Conversation: "I'm not a huge fan of my current situation.",
            UniqueWords: 9,
            LongestWord: 'situation',
            Name: '',
            Date: "2015-05-11",
            ConversationMinutes: 1,
            ConversationSeconds: 0
        }
    ];

    dataBase.tempConversation =
    {
        tempConversation: "",
        tempConvMins: 0,
        tempConvSecs: 0
    };
    
    dataBase.Analytics =
    [
        {
            AnalyticsId: 29384,
            ChildId: 11,
            TotalWords: 20,
            LongestWord: "definitely",
            ConversationMinutes: 0,
            ConversationSeconds: 26,
            ConversationsLogged: 2
        },{
            AnalyticsId: 28374,
            ChildId: 21,
            TotalWords: 24,
            LongestWord: "greatest",
            ConversationMinutes: 1,
            ConversationSeconds: 6,
            ConversationsLogged: 3
        },{
            AnalyticsId: 85849,
            ChildId: 12,
            TotalWords: 19,
            LongestWord: "situation",
            ConversationMinutes: 1,
            ConversationSeconds: 32,
            ConversationsLogged: 2
        },{
            AnalyticsId: 34832,
            ChildId: 22,
            TotalWords: 13,
            LongestWord: "follow",
            ConversationMinutes: 0,
            ConversationSeconds: 48,
            ConversationsLogged: 1
        }
    ];

    dataBase.WordBank = 
    [
        {
            WordBankId: 1,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 2,
                Created: "2015-07-10"
              },{
                ChildId: 21,
                Count: 3,
                Created: "2015-07-10"
              },{
                ChildId: 22,
                Count: 4,
                Created: "2015-07-10"
              }
            ],
            Word: "i"
        },{
            WordBankId: 2,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              },{
                ChildId: 21,
                Count: 2,
                Created: "2015-07-10"
              }
            ],
            Word: "am"
        },{
            WordBankId: 3,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "very"
        },{
            WordBankId: 4,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "still"
        },{
            WordBankId: 5,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "we"
        },{
            WordBankId: 6,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "will"
        },{
            WordBankId: 7,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "take"
        },{
            WordBankId: 8,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "back"
        },{
            WordBankId: 9,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "our"
        },{
            WordBankId: 10,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "lands"
        },{
            WordBankId: 11,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              },{
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "winter"
        },{
            WordBankId: 12,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              },{
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              },{
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "is"
        },{
            WordBankId: 13,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              },{
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "coming"
        },{
            WordBankId: 14,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "dad"
        },{
            WordBankId: 15,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "cold"
        },{
            WordBankId: 16,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "yet"
        },{
            WordBankId: 17,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "feel"
        },{
            WordBankId: 18,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              },{
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "the"
        },{
            WordBankId: 19,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              },{
                ChildId: 22,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "need"
        },{
            WordBankId: 20,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              },{
                ChildId: 22,
                Count: 3,
                Created: "2015-07-10"
              }
            ],
            Word: "to"
        },{
            WordBankId: 21,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "go"
        },{
            WordBankId: 22,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "north"
        },{
            WordBankId: 23,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "greatest"
        },{
            WordBankId: 24,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "hunter"
        },{
            WordBankId: 25,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 2,
                Created: "2015-07-10"
              }
            ],
            Word: "oh"
        },{
            WordBankId: 26,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              },{
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "my"
        },{
            WordBankId: 27,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "god"
        },{
            WordBankId: 28,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              },{
                ChildId: 22,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "what"
        },{
            WordBankId: 29,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 3,
                Created: "2015-07-10"
              }
            ],
            Word: "that"
        },{
            WordBankId: 30,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "just"
        },{
            WordBankId: 31,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              },{
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              },{
                ChildId: 21,
                Count: 2,
                Created: "2015-07-10"
              }
            ],
            Word: "a"
        },{
            WordBankId: 32,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "squirrel"
        },{
            WordBankId: 33,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "knew"
        },{
            WordBankId: 34,
            ChildUse:
            [
              {
                ChildId: 22,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "don't"
        },{
            WordBankId: 35,
            ChildUse:
            [
              {
                ChildId: 22,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "know"
        },{
            WordBankId: 36,
            ChildUse:
            [
              {
                ChildId: 22,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "do"
        },{
            WordBankId: 37,
            ChildUse:
            [
              {
                ChildId: 22,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "want"
        },{
            WordBankId: 38,
            ChildUse:
            [
              {
                ChildId: 22,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "follow"
        },{
            WordBankId: 39,
            ChildUse:
            [
              {
                ChildId: 22,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "him"
        },{
            WordBankId: 40,
            ChildUse:
            [
              {
                ChildId: 22,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "but"
        },{
            WordBankId: 41,
            ChildUse:
            [
              {
                ChildId: 22,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "help"
        },{
            WordBankId: 42,
            ChildUse:
            [
              {
                ChildId: 22,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "her"
        },{
            WordBankId: 43,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "this"
        },{
            WordBankId: 44,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "was"
        },{
            WordBankId: 45,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "mistake"
        },{
            WordBankId: 46,
            ChildUse:
            [
              {
                ChildId: 11,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "definitely"
        },{
            WordBankId: 47,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "maybe"
        },{
            WordBankId: 48,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "jerk"
        },{
            WordBankId: 49,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "no"
        },{
            WordBankId: 50,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "everyone"
        },{
            WordBankId: 51,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "adores"
        },{
            WordBankId: 52,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "me"
        },{
            WordBankId: 53,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "can't"
        },{
            WordBankId: 54,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "be"
        },{
            WordBankId: 55,
            ChildUse:
            [
              {
                ChildId: 21,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "right"
        },{
            WordBankId: 56,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "i'm"
        },{
            WordBankId: 57,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "not"
        },{
            WordBankId: 58,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "huge"
        },{
            WordBankId: 59,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "fan"
        },{
            WordBankId: 60,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "of"
        },{
            WordBankId: 61,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "current"
        },{
            WordBankId: 62,
            ChildUse:
            [
              {
                ChildId: 12,
                Count: 1,
                Created: "2015-07-10"
              }
            ],
            Word: "situation"
        }
    ];
});
