var app = angular.module('myApp', ['zingchart-angularjs']);
app.controller('MainController',function ($scope) {
 
 var a =JSON.parse(localStorage.getItem("corr"));
 var b =5-a;
  
  $scope.myJson = {
    type: "pie",
    title: {
      textAlign: 'center',
      text: "Your Score"
    },
    plot: {
      slice: 50 
    },
    series: [{
      values: [a],
      text: "Correct Answers"

    }, {
      values: [b],
      text: "Wrong Answers"
    }]
  };
});

(function() {
    angular.module("celebrityFacts")
    .factory("quizMetrics", QuizMetrics);

    QuizMetrics.$inject = ['DataService',"$http"]; //my answers are comming from DataService

    function QuizMetrics(DataService,$http) {
      //in a factoy you do some work and return the object (data), and your controller will have access to this object (hence communicating between the controllers)
      var quizObj = {
        quizActive: false,
        resultsActive: false,
        changeState: changeState,
        correctAnswers: [],
        markQuiz: markQuiz,
        numCorrect: 0
      };
      return quizObj;




      function changeState(metric, state) {   //we can change state of the quiz or the result
        if(metric === "quiz"){
        quizObj.quizActive = state;
        }
        else if(metric === "results") {
          quizObj.resultsActive = state;
        }
        else {
          return false;
        }
      }

      function markQuiz() { //loop through all of the questions in the quiz and compare the answer the user slelected against the correct answer and if correct than we set the correct flag. So we can use the correct flag in the results.js to see which questions are correct.
        quizObj.correctAnswers = DataService.correctAnswers;
        for(var i=0; i<DataService.quizQuestions.length; i++) {
          if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]) {
            DataService.quizQuestions[i].correct = true;
            quizObj.numCorrect++;
          }
          else {
            DataService.quizQuestions[i].correct = false;
          }
        }

        $http.post('admin/mcqSubmit',{score : quizObj.numCorrect}).then(function(response){
           console.log('response',response);
        },function(error){

        });

        localStorage.setItem("corr",quizObj.numCorrect);
       // alert(localStorage.getItem("corr"));
      }
    }

})();



