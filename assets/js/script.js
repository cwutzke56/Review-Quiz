//declaring my DOM elements
var timerEL = document.querySelector("#timer");
var questionsEL = document.querySelector("#questions");
var choicesEl = document.querySelector("#options");
var submitBtn = document.querySelector("#finalscore");
var startBtn = document.querySelector("#start");
var nameEl = document.querySelector("#name");
var feedbackEl = document.querySelector("#feedback");
var reStartBtn = document.querySelector("#restart");
//questions being asked for quiz
var questions = [
    { prompt: "Inside which HTML element do we put the JavaScript?",
    options: ["<javascript>", "<js>", "<script>", "<scripting>"],
    answer: "<script>"
},

{
    prompt: "How do you call a function named myFunction?",
    options: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction"],
    answer: "myFunction()"
},

{
    prompt: "How does a for loop start?",
    options: ["for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", " for (i <= 5; i++)"],
    answer: "for (i = 0; i <= 5; i++)"
},

{
    prompt: "In JavaScript, which of the following is a logical operator?",
    options: ["|", "&&", "%", "/"],
    answer: "&&" 
},

{
    prompt: "A named element in a JavaScript program that is used to store and retrieve data is a _____.",
    options: ["method", "assignment operator", "variable", "string"],
    answer: "variable"
}];

//declaration of used variables throughout
var time= questions.length*15;
var timer;
var questionCurrent;

//clicking timer
function timerStart(){
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
      endQuestion();
}}
//starts the test 
function startQuestion(){
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    var nextScreenEl = document.getElementById("start-screen");
    nextScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    getQuestion();
}
//
function questionClick(){

}
//
function endQuestion(){

}
//
function timerDown(){

}
//
function saveScore(){

}

