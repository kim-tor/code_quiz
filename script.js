var start = document.getElementById("btn btn-info");

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
        answer: "d"
   },
   {
       question:"The condition in an if/else statement is enclosed within?",
       choices:{
         a:"quotes",
         b:"curly brackets",
         c:"parentheses",
         d:"square brakets",
          },
        answer: "b",
    },
    {
        question:"Arrays in Javascript can be used to store",
        choices:{
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above",
        },
        answer: "d",
    },
    {
        question: "String values are enclosed within _____ when being assigned to variables",
        choices:{
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis",
        },
        answer:"c",
    },
     ];
   
var questionIndex = 0;
         
function startQuiz(){
    const output = [];
    
    // question.forEach(
    // )

}


start.addEventListener("click", function(){
    startQuiz();
});
