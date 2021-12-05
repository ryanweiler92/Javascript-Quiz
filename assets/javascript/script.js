const questions = [{
    id: 1,
    question: "Is a variable named 'orange' the same as 'Orange' in javascript?",
    choices: ['Yes', 'No', 'Only when we use strict', "None of the above"],
    correctAnswer: 'No'
}, {
    id: 2,
    question: "JavaScript is a ____-side programming language.",
    choices: ["Client", "Server", "Both", "None"],
    correctAnswer: "Both"
}, {
    id: 3,
    question: "Which of the following will write the message “Hello and welcome!” in an alert box?",
    choices: ["alertBox(“Hello and welcome!”);", "alert(Hello and welcome!);", "msgAlert(“Hello and welcome!”);", "alert(“Hello and welcome!”);"],
    correctAnswer: "alert(“Hello and welcome!”);"
}, {
    id: 4,
    question: '"Which is the correct "if" statemnts to execute certain code if "x" is equal to 2?"',
    choices: ["if(x 2)", "if(x = 2)", "if(x == 2)", "if(x != 2 )"],
    correctAnswer: "if(x == 2)"
}, {
    id: 5,
    question: "JavaScript files have an extension of?",
    choices: [".java", ".js", ".javascript", ".xml"],
    correctAnswer: ".js"
}, {
    id: 6,
    question: "A function associated with an object is called?",
    choices: ["Function", "Method", "Link", "None"],
    correctAnswer: "Method"
}, {
    id: 7,
    question: "Which of the following function of the array object returns a string representing the array and its elements?",
    choices: ["toSource()", "sort()", "splice()", "toString()"],
    correctAnswer: "toString()"
}, {
    id: 8,
    question: "GetMonth() returns the month as a",
    choices: ["Int", "Float", "Char", "String"],
    correctAnswer: "Int"
}, {
    id: 9,
    question: "Which of the dialog boxes displays a message and a data entry field?",
    choices: ["Alert()", "Prompt()", "Confirm()", "Msg()"],
    correctAnswer: "Prompt()"
}, {
    id: 10,
    question: '"What is meant by the "this" keyword in javascript?"',
    choices: ["It refers to the current object", "It refers to the previous object", "It is a variable that contains a value", "None of the above"],
    correctAnswer: "It refers to the current object"
}];

var startButton = document.querySelector("#start-btn");
var counter = document.getElementById("#timer");
var currentQuestionIndex = 0;
var score = 0;
var seconds = 60;

var timeoutVar

var timer = function() {
    
    function time() {
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        
            if (seconds > 0) {
                timeoutVar = setTimeout(time, 1000); //delete 2 zeros to go back to 1 minute; 
            } else {
                alert("Times up!");
                var questionDiv = document.getElementById('question');
                questionDiv.remove();
                var questionNumberDiv = document.getElementById('question-number-div');
                questionNumberDiv.remove();
                var answersDiv = document.getElementById("answers");
                answersDiv.remove();
                endGame();
            }
        } time();
    
}


var updateScore = function() {
    var scoreCounter = document.getElementById("score-counter");
    scoreCounter.innerHTML= score;
};


var createQuestion = function () {

    startButton.style.display = "none";

    var questionNumberDiv = document.createElement('div');
    questionNumberDiv.className = "question-number-container";
    questionNumberDiv.id = "question-number-div"
    document.body.appendChild(questionNumberDiv);

    var questionNumber = document.createElement('h2');
    questionNumber.textContent = "Question: " + questions[currentQuestionIndex].id;
    questionNumberDiv.appendChild(questionNumber);

    var questionDiv = document.createElement('div');
    questionDiv.className = "question-container";
    questionDiv.id = 'question';
    document.body.appendChild(questionDiv);

    var questionTitle = document.createElement('h2');
    questionTitle.innerHTML = questions[currentQuestionIndex].question;
    questionDiv.appendChild(questionTitle);

    var answersDiv = document.createElement('div');
    answersDiv.className = "answers-container";
    answersDiv.id = 'answers'
    document.body.appendChild(answersDiv);

    var answersList = document.createElement('ul');
    answersDiv.appendChild(answersList);

    var answersLi = document.createElement('li');
    answersList.appendChild(answersLi);
   
    for (var p = 0; p < questions[currentQuestionIndex].choices.length; p++) {
        var answersButtons = document.createElement('button');
        answersButtons.id = 'answers-buttons' + p;
        answersButtons.textContent = questions[currentQuestionIndex].choices[p];
        
        answersLi.appendChild(answersButtons);

        answersButtons.addEventListener("click", checkAnswer)
}
};    


var checkAnswer = function(event) {
    
     if (event.target.textContent == questions[currentQuestionIndex].correctAnswer) {
        score = score + 10; 
        var questionDiv = document.getElementById('question');
        questionDiv.remove();
        var questionNumberDiv = document.getElementById('question-number-div');
        questionNumberDiv.remove();
        var answersDiv = document.getElementById("answers");
        answersDiv.remove();
        currentQuestionIndex++; 
        updateScore();
        if (currentQuestionIndex > 9) {
            console.log("Game Over")
            endGame();
        } else {
        createQuestion();
        }
    }else{
        score = score - 5;
        seconds = seconds - 5;
        var questionDiv = document.getElementById('question');
        questionDiv.remove();
        var questionNumberDiv = document.getElementById('question-number-div');
        questionNumberDiv.remove();
        var answersDiv = document.getElementById("answers");
        answersDiv.remove();
        currentQuestionIndex++;
        updateScore();
        if (currentQuestionIndex > 9) {
            console.log("Game Over")
            endGame();
        } else{
        createQuestion();
        
        }
    }
};




var endGame = function() {
    counter = seconds
            if (seconds > 49) {
                score = score + 50
            }else if (seconds > 39) {
                score = score + 40
            }else if (seconds > 29) {
                score = score + 30
            }else if (seconds > 19) {
                score = score + 20
            }else if (seconds > 9) {
                score = score + 10
            } else{
                score = score;
            }
            updateScore();
            scores.push(score);
            clearTimeout(timeoutVar);

            var finalScoreMessageDiv = document.createElement('div');
            finalScoreMessageDiv.className = "question-container";
            document.body.appendChild(finalScoreMessageDiv);

            var finalScoreMessage = document.createElement('h2');
            finalScoreMessage.innerHTML = "<h2>Congratulations on finishing the Javascript quiz! You finished with a score of " + score + ". Click submit to save your final score!</h2>"
            finalScoreMessageDiv.appendChild(finalScoreMessage);

            var submitScoreForm = document.createElement('form');
            submitScoreForm.id = 'submit-score-form';
            submitScoreForm.method = 'get';
            finalScoreMessageDiv.appendChild(submitScoreForm);

            var initialsInput = document.createElement('input');
            initialsInput.type = 'text';
            initialsInput.id = 'initials';
            initialsInput.placeholder = 'Your initials'
            initialsInput.name = 'initials'
            submitScoreForm.appendChild(initialsInput);
            
            var highScoreButton = document.createElement('button');
            highScoreButton.id = 'save';
            highScoreButton.type = 'submit';
            highScoreButton.textContent = 'submit';
            submitScoreForm.appendChild(highScoreButton);
            highScoreButton.addEventListener("click", saveHighScore)

};

var scores = [];

var saveHighScore = function (e) {
    
    localStorage.setItem('Score', JSON.stringify(scores));
    var initialsInput = document.getElementById('initials');
    localStorage.setItem("initials", JSON.stringify(initialsInput.value));
    console.log(initialsInput.value)
    
    e.preventDefault();


    

    
    

 
    

}

   

startButton.addEventListener("click", timer);
startButton.addEventListener("click", createQuestion);


