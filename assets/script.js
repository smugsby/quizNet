const question = document.querySelector('#question');//question
const data = Array.from(document.querySelector('.data'));
const pick = document.querySelector('.pick');
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
//Making questions appear
function reappear(){
    var questionEl= 
    document.getElementById("disappear");
    questionEl.classList.remove("disappear");
}
//Adding timer function
function timer(){
    var sec= 0
        var secCounter = setInterval(function(){
        document.getElementById("seconds").innerHTML="00"+ sec;
        sec++;
    },1000);
    reappear();
}
//logic for next question
if (maxQuestions>countQuestion) {
    
}
//start game
function startGame(){
    score=0;
    nextQuestion=[...questions];
}
//get button click to start game
function buttonClick() {
    document.getElementById('start').onclick()= addQuiz();}
