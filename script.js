var startEl = document.querySelector("#start");
console.log(startEl)
var timerEl = document.querySelector("timer");
var clearEl = document.querySelector("#clear");
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector("#answer");
var submitEl = document.querySelector("#submit");
var homeEl = document.querySelector(".cq");
var liEl = document.querySelectorAll("li");
console.log(liEl);

// create a constant array variable that holds question objects with details of questions, choices and answer
const quiz = [
   {
     question: "Commonly used data types DO NOT include: ",
     choices:{
        a: "strings",
        b: "booleans",
        c: "numbers",
        d: "alerts"
             },
        answer: "alerts"
   },
   {
       question:"The condition in an if/else statement is enclosed within?",
       choices:{
         a:"quotes",
         b:"curly brackets",
         c:"parentheses",
         d:"square brakets",
          },
        answer: "c",
    },
    {
        question:"Arrays in Javascript can be used to store",
        choices:{
            a: "numbers and strings",
            b: "other arrays",
            c: "objects",
            d: "all of the above",
        },
        answer: "all of the above",
    },
    {
        question: "String values are enclosed within _____ when being assigned to variables",
        choices:{
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parentheses",
        },
        answer:"quotes",
    },
     ];
   
// I need to put in a form when they are done the quiz to submit their highs score.I am not sure where that form goes, in the html? the form will have a submit button 
// so I will give that an event listener 

var questionIndex = 0;
 
//when the quiz is started I have to remove the display none css setting so that the questions can be seen
function startQuiz(){
console.log("start");  
homeEl.textContent = "";
questionEl.textContent = quiz[questionIndex].question
console.log(Object.values(quiz[questionIndex].choices))
var answers = Object.values(quiz[questionIndex].choices);

for(i =0; i<answers.length; i++){
    console.log(answers[i]);
    console.log(liEl[i]);
    liEl[i].textContent = answers[i];

    liEl[i].addEventListener("click",rightOrWrong); 

}

};

function rightOrWrong(event){
    console.log(event.target)

    console.log (event.target.textContent)

    if(event.target.textContent === quiz[questionIndex].answer){
        console.log("correct");
       
    }
    else{

    }
       
    };

//event listener that will start the code 
startEl.addEventListener("click", startQuiz);

// //do I need an event listener so that when clicked it will go to the next question?
// //also if they select the right answer it should display "correct" underneath.
// answerEl.addEventListener("click", function(){

// });

// //how can I create the "wrong!" notification

// // I also need to figure out the timer, how to get it to decrement correctly

// submitEl.addEventListener("click", function(){

// });