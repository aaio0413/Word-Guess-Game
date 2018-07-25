# Word-Guess-Game
Basically Hangman. June 2018
The URL --------> https://aaio0413.github.io/Word-Guess-Game/

・Description: 
Basically Hangman. The theme is Star Wars characters. When either player wins or loses, an image for the chracter shows up.

・Technical note:
To make the eveluation easy, when there is key press, it fetches the value of userInput and check throw an array of the answer and gets the index of the same letter to input that element to the another array.
Here is the code.


var answer = ""
var userProgress = []


var randomNum = Math.floor(Math.random()*character.length)
var answer = character[randomNum];
answer = answer.toUpperCase();
var imgIndex = randomNum;
var answerLength = answer.length;
var userProgress = new Array(answerLength).fill('-');

var checkTheLetter = function(userInput) {
    if (answer.indexOf(userInput) > -1) {
        for (i=0; i < answer.length; i++) {
            if(answer[i] === userInput) {
                userProgress[i] = userInput; 
            }
        }
        generateQuestion();
        updateGuesses();
        if (userProgress.join("") == answer) {    
            wins++;
            updateResults();
            winOrLose(1);
        }
    } else {
        guessNum--;
        updateGuesses();
        if (guessNum == 0) {
            updateGuesses();
            loses++;
            updateResults()
            winOrLose(0);
        }
    }
};


var generateQuestion = function() {
    var progressString = userProgress.join("");
    var letters = document.getElementById('letters');
    letters.innerHTML = progressString;
};

var updateGuesses = function() {
    var guessNumHtml = document.getElementById('guessNum');
    var guessesHtml = document.getElementById('guesses');
    guessNumHtml.innerHTML = guessNum;
    guessesHtml.innerHTML = guesses;
};

var updateResults = function() {
    var winsHTML = document.getElementById('wins');
    winsHTML.innerHTML = wins;
    var losesHTML = document.getElementById('loses');
    losesHTML.innerHTML = loses;
}

var winOrLose = function(winOrLose){
    if (winOrLose == 1 ) {
        if(window.confirm("You won!! Next Game?")) {
            printImg();
            reset();
        }
    } else {
        if(window.confirm("You lose!! Next Game?")) {
            printImg();
            reset();
        }
    }
}

