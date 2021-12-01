const questions = [{
    question: "What is the HTML element that we place Javascript in?",
    choices: ["<js>", "<javascript> ", "<scripting>", "<script>"],
    correctAnswer: 3
}, {
    question: "JavaScript is a ____-side programming language.",
    choices: ["Client", "Server", "Both", "None"],
    correctAnswer: 2
}, {
    question: "Which of the following will write the message “Hello and welcome!” in an alert box?",
    choices: ["alertBox(“Hello and welcome!”);", "alert(Hello and welcome!);", "msgAlert(“Hello and welcome!”);", "alert(“Hello and welcome!”);"],
    correctAnswer: 3
}, {
    question: '"Which is the correct "if" statemnts to execute certain code if "x" is equal to 2?"',
    choices: ["if(x 2)", "if(x = 2)", "if(x == 2)", "if(x != 2 )"],
    correctAnswer: 2
}, {
    question: "JavaScript files have an extension of?",
    choices: [".java", ".js", ".javascript", ".xml"],
    correctAnswer: 1
}, {
    question: "A function associated with an object is called?",
    choices: ["Function", "Method", "Link", "None"],
    correctAnswer: 1
}, {
    question: "Which of the following function of the array object returns a string representing the array and its elements?",
    choices: ["toSource()", "sort()", "splice()", "toString()"],
    correctAnswer: 3
}, {
    question: "GetMonth() returns the month as a",
    choices: ["Int", "Float", "Char", "String"],
    correctAnswer: 0
}, {
    question: "Which of the dialog boxes displays a message and a data entry field?",
    choices: ["Alert()", "Prompt()", "Confirm()", "Msg()"],
    correctAnswer: 1
}, {
    question: '"What is meant by the "this" keyword in javascript?"',
    choices: ["It refers to the current object", "It refers to the previous object", "It is a variable that contains a value", "None of the above"],
    correctAnswer: 0
}];

var startButton = document.querySelector("#start-btn");
var questionText = document.querySelector("#question-text");
var answerButtons = document.querySelector(".answer-button");
var quizContainer = document.querySelector("#quiz-container");
var counter = document.getElementById("#timer");

var timer = function() {
    var seconds = 60;
    function tick() {
        //var counter = document.getElementById("#timer");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
            if (seconds > 0) {
                setTimeout(tick, 1001);
            } else {
                alert("Game over");
            }
        } tick();
}

startButton.addEventListener("click", timer);