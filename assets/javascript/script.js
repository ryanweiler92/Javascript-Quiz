const questions = [{
    id: 1,
    question: "What is the HTML element that we place Javascript in?",
    choices: ['<js>', "<javascript>", "<scripting>", "<script>"],
    correctAnswer: 3
}, {
    id: 2,
    question: "JavaScript is a ____-side programming language.",
    choices: ["Client", "Server", "Both", "None"],
    correctAnswer: 2
}, {
    id: 3,
    question: "Which of the following will write the message “Hello and welcome!” in an alert box?",
    choices: ["alertBox(“Hello and welcome!”);", "alert(Hello and welcome!);", "msgAlert(“Hello and welcome!”);", "alert(“Hello and welcome!”);"],
    correctAnswer: 3
}, {
    id: 4,
    question: '"Which is the correct "if" statemnts to execute certain code if "x" is equal to 2?"',
    choices: ["if(x 2)", "if(x = 2)", "if(x == 2)", "if(x != 2 )"],
    correctAnswer: 2
}, {
    id: 5,
    question: "JavaScript files have an extension of?",
    choices: [".java", ".js", ".javascript", ".xml"],
    correctAnswer: 1
}, {
    id: 6,
    question: "A function associated with an object is called?",
    choices: ["Function", "Method", "Link", "None"],
    correctAnswer: 1
}, {
    id: 7,
    question: "Which of the following function of the array object returns a string representing the array and its elements?",
    choices: ["toSource()", "sort()", "splice()", "toString()"],
    correctAnswer: 3
}, {
    id: 8,
    question: "GetMonth() returns the month as a",
    choices: ["Int", "Float", "Char", "String"],
    correctAnswer: 0
}, {
    id: 9,
    question: "Which of the dialog boxes displays a message and a data entry field?",
    choices: ["Alert()", "Prompt()", "Confirm()", "Msg()"],
    correctAnswer: 1
}, {
    id: 10,
    question: '"What is meant by the "this" keyword in javascript?"',
    choices: ["It refers to the current object", "It refers to the previous object", "It is a variable that contains a value", "None of the above"],
    correctAnswer: 0
}];

var startButton = document.querySelector("#start-btn");
var counter = document.getElementById("#timer");



var timer = function() {
    var seconds = 60;
    function time() {
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
            if (seconds > 0) {
                setTimeout(time, 100001); //delete 2 zeros to go back to 1 minute; 
            } else {
                alert("Times up!");
            }
        } time();
};

var questionCount = 0;
var score = 0;


var createQuestion = function () {
    for (var i = 0; i < 10; i++) {
    var questionDiv = document.createElement('div');
    questionDiv.className = "question-container";
    questionDiv.id = 'question';
    document.body.appendChild(questionDiv);

    var questionTitle = document.createElement('h2');
    questionTitle.innerHTML = questions[i].question;
    questionDiv.appendChild(questionTitle);

    var answersDiv = document.createElement('div');
    answersDiv.className = "answers-container";
    document.body.appendChild(answersDiv);

    var answersList = document.createElement('ul');
    answersDiv.appendChild(answersList);

    var answersLi = document.createElement('li');
    answersList.appendChild(answersLi);
   
    for (var p = 0; p < questions[i].choices.length; p++) {
        var answersButtons = document.createElement('button');
        answersButtons.textContent = questions[i].choices[p];
    
        answersLi.appendChild(answersButtons);
    
}
}    
}


/*var createQuestion = function() {
    for (let i=0; i<questions.length; i++) {
        
        var questionDiv = document.createElement('div');
        questionDiv.className = "question-container";
        document.body.appendChild(questionDiv)
        
        var questionTitle = document.createElement('h2');
        questionTitle.innerHTML = questions[i].question;
        questionDiv.appendChild(questionTitle);

        var answersDiv = document.createElement('div');
        answersDiv.className = "answers-container";
        document.body.appendChild(answersDiv);
        var answerList = document.createElement('ul')
        answersDiv.appendChild(answerList);

        for (let p=0; p<questions[i].choices.length; p++) {

            var answerListLi = document.createElement('li');
            answerList.appendChild(answerListLi);

            var choicesButton = document.createElement('button');
            choicesButton.className = "answers-container"
            choicesButton.textContent = questions[i].choices[p];

            answerListLi.appendChild(choicesButton);

            
        }
    }
}*/


startButton.addEventListener("click", timer);
startButton.addEventListener("click", createQuestion);

