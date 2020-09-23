var startEl = document.querySelector("#start");
console.log(startEl)
var timer = document.querySelector("#timer");
var secondsRemaining = 60;
var clearEl = document.querySelector("#clear");
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answers");
var submitEl = document.querySelector("#submit");
console.log(submitEl);
var homeEl = document.querySelector(".codeQuiz");
var liEl = document.querySelectorAll("li");
console.log(liEl);
var resultsEl = document.querySelector("#results");

// create a constant array variable that holds question objects with details of questions, choices and answer
const quiz =
    [
        {
            question: "Commonly used data types DO NOT include: ",
            choices: {
                a: "strings",
                b: "booleans",
                c: "numbers",
                d: "alerts"
            },
            answer: "alerts"
        },
        {
            question: "The condition in an if/else statement is enclosed within?",
            choices: {
                a: "quotes",
                b: "curly brackets",
                c: "parentheses",
                d: "square brakets",
            },
            answer: "parentheses",
        },
        {
            question: "Arrays in Javascript can be used to store",
            choices: {
                a: "numbers and strings",
                b: "other arrays",
                c: "objects",
                d: "all of the above",
            },
            answer: "all of the above",
        },
        {
            question: "String values are enclosed within _____ when being assigned to variables",
            choices: {
                a: "commas",
                b: "curly brackets",
                c: "quotes",
                d: "parentheses",
            },
            answer: "quotes",
        },
    ];

var questionIndex = 0;
var answers = Object.values(quiz[questionIndex].choices);

function setTime() {
    var timerInterval = setInterval(function () {
        secondsRemaining--;
        timer.textContent = "Time:" + secondsRemaining;
        // console.log(timer);
        if (secondsRemaining <= 0 || questionIndex === answers.length) {
            clearInterval(timerInterval);
            setTimeout(userScore(), 60);
        }
    }, 1000);

}


//when the quiz is started I have to remove the display none css setting so that the questions can be seen
function startQuiz() {
    console.log("start");
    setTime();
    renderQuestions();
};

function renderQuestions() {
    homeEl.textContent = "";
    questionEl.textContent = quiz[questionIndex].question

    //since I have an object in my array I used Object.values to convert them into an array

    answers = Object.values(quiz[questionIndex].choices);
    for (var i = 0; i < answers.length; i++) {
        console.log(answers[i]);
        console.log(liEl[i]);
        liEl[i].textContent = answers[i];

        liEl[i].addEventListener("click", feedback);
    }
};

function feedback(event) {
    // console.log(event.target)

    // console.log(event.target.textContent)

    var feedback = document.createElement("div");
    var pEl = document.createElement("p");

    feedback.setAttribute("class", feedback);
    feedback.appendChild(pEl);
    answerEl.appendChild(feedback);
    console.log(event.target.textContent);
    console.log(quiz[questionIndex].answer);

    // if statement to determine whether correct or incorrect will print.
    if (event.target.textContent === quiz[questionIndex].answer) {
        console.log("correct");
        pEl.textContent = "Correct !"
    }
    else {
        pEl.textContent = "Wrong!";
        if (secondsRemaining <= 15) {
            secondsRemaining = 0;
        }
        else {
            secondsRemaining -= 15;
        }
    }
    questionIndex++;
    renderQuestions();
};

// function done(){
// var scores = localStorage.getItem("scores");
// scores = JSON.parse(scores);

// if (scores !== null){

//     for (var i = 0; i<scores.length; i++){
//         var newLi = document.createElement("li");
//         newLi.textContent = scores[i].initials + "" + scores[i].score;
//         highscore.appendChild(newLi);
//     }
// }
// };

//creating this function to end the quiz and have the form show up for them to fill out
function userScore() {
    questionEl;
    timer.remove;
    console.log(timer);
    document.getElementById("quiz").classList.add("d-none");
    document.getElementById("results").classList.remove("d-none");
    
};

function addScore() {
    initialInput = document.getElementById("initials").value;
    console.log(initialInput);
    var newScore = {
        name: initialInput,
        score: secondsRemaining,
    };
    console.log(newScore);

    var highScores = JSON.parse(localStorage.getItem(("highScore") || "[]"));
    highScores.push(newScore);
    console.log(highScores);
    localStorage.setItem("highScore", JSON.stringify(highScores));

};



//event listener that will start the code 
startEl.addEventListener("click", startQuiz);

submitEl.addEventListener("click", function(event){
    event.stopPropagation();
    addScore();
    
    window.location.replace = "highscore.html";
} );

// clearEl.addEventListener("click", function(){
//     localStorage.clear();
//     localStorage.reload();
// });