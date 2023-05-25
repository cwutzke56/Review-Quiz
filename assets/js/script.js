//declaring my DOM elements
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#options");
var submitBtn = document.querySelector("#submitTest");
var startBtn = document.querySelector("#start");
var nameEl = document.querySelector("#name");
var feedbackEl = document.querySelector("#feedback");
var reStartBtn = document.querySelector("#restart");


//declaration of used variables throughout
var time= questions.length*15;
var timer;
var currentQuestion;
var finalQuestionIndex = questions.length;

//clicking timer
function timerStart(){
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
      endQuestion();
}}


  

//starts the test 
function startQuestions(){
    timerId = setInterval(timerStart, 1000);
    timerEl.textContent = time;
    var nextScreenEl = document.getElementById("startQuestion");
    nextScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    getQuestion();
}
startBtn.addEventListener("click", startQuestions);

//questions being asked for quiz
var questions = [

];
//goes through questionair
function getQuestion() {
   
}
//goes to next question and tells if right or wrong
function questionClick(){
   
  }
//ends the questions and timer and shows the final score
function endQuestion(){
    clearInterval(timerId);
    var endScreenEl = document.getElementById("endQuestion");
    endScreenEl.removeAttribute("class");
    var finalScoreEl = document.getElementById("finalScore");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "hide");
}

//saves the score of test
function saveScore(){
 
}
submitBtn.addEventListener("click", saveScore)





