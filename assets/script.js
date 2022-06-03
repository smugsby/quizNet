const question = document.querySelector('#question');//question
const data = Array.from(document.querySelector('.data'));//choice-text
const pick = document.querySelector('.pick');//choice-prefix

let score = 0
let questionCounter = 0
let currentQuestion=""

let questions = [
    {
        question:"What does CSS stand for?",
        data1:"Cascading Style Sheets",
        data2:"Conner Sued Sally",
        data3:"Current Style Sorts",
        data4:"Currently Serving Salads",
        ander:1,
    },
    {
        question:"What does CSS stand for?",
        data1:"Cascading Style Sheets",
        data2:"Conner Sued Sally",
        data3:"Current Style Sorts",
        data4:"Currently Serving Salads",
    },
    {
        question:"What does CSS stand for?",
        data1:"Cascading Style Sheets",
        data2:"Conner Sued Sally",
        data3:"Current Style Sorts",
        data4:"Currently Serving Salads",
    }
];
// establishing number of questions for the game
const maxQuestions=3;
const countQuestion=0;

//adding display function
var quizBody= getElementById("quizBody");
function addQuiz(){
    quizBody.classList.remove("disappear")
}
//Adding timer function
function timer(){
    var sec= 0
        var secCounter = setInterval(function(){
        document.getElementById("seconds").innerHTML="00"+ sec;
        sec++;
    },1000);
}
//logic for next question
if (maxQuestions>countQuestion) {
    
}
//start game
function startGame(){
    score=0;
    nextQuestion=[...questions];
    addQuiz();
    timer();
}
//get button click to start game
function buttonClick() {
    document.getElementById('start').onclick()= addQuiz();}