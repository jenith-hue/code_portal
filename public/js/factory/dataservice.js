(function() {
  angular.module("celebrityFacts").factory("DataService", DataFactory);

  function DataFactory() {
    var dataObj = {
      quizQuestions: quizQuestions,
      correctAnswers: correctAnswers
    };
    return dataObj;
  }

var correctAnswers = [1,0,3,2,1,1]; 

var quizQuestions = [
    {
      type: "text",
      text: " What is the compound interest on Rs. 2500 for 2 years at rate of interest 4% per annum? ",
      possibilities: [
        {
          answer: "Rs.180"
        },
        {
          answer: "Rs.204"
        },
        {
          answer: "Rs.210"
        },
        {
          answer: "Rs.220"
        }
      ],
      selected: null,
      correct: null
    },
  
    {
      type: "text",
      text: " Who are you ?  ",
      possibilities: [
        {
          answer: "I"
        },
        {
          answer: "Me"
        },
        {
          answer: "You"
        },
        {
          answer: "They"
        }
      ],
      selected: null,
      correct: null
    },

    {
      type: "text",
      text: "A running man crosses a bridge of length 500 meters in 4 minutes. At what speed he is running?",
      possibilities: [
        {
          answer: "8.5 km/s"
        },
        {
          answer: "6.5 km/s"
        },
        {
          answer: " 9.5 km/s"
        },
        {
          answer: " 7.5 km/s"
        }
      ],
      selected: null,
      correct: null
    },

   

    {
        type: "text",
        text: "If January 1, 1996, was Monday, what day of the week was January 1, 1997?",
        possibilities: [
          {
            answer: "Thuresday"
          },
          {
            answer: "Friday"
          },
          {
            answer: "Wednesday"
          },
          {
            answer: "Sunday"
          }
        ],
        selected: null,
        correct: null
    },

    {
        type: "text",
        text: "40 % of 280 =?",
        possibilities: [
          {
            answer: "112"
          },
          {
            answer: "116"
          },
          {
            answer: " 115"
          },
          {
            answer: "120"
          }
        ],
        selected: null,
        correct: null
    },

   

    {
        type: "text",
        text: "A shopkeeper sold an article for Rs. 2500. If the cost price of the article is 2000, find the profit percent.",
        possibilities: [
          {
            answer: "23%"
          },
          {
            answer: "25%"
          },
          {
            answer: "27%"
          },
          {
            answer: "29%"
          }
        ],
        selected: null,
        correct: null
    },
  ];



})();
