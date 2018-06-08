var wins = 0;
var loses = 0;
var guesses = "";
var guessNum = 8;
var question = "";
var answer = ""
var userProgress = []
var character = new Array(15);

character[0] = "Anakin Skywalker";
character[1] = "C3PO";
character[2] = "Chewbacca";
character[3] = "Darth Vader";
character[4] = "Darth Maul";
character[5] = "Han Solo";
character[6] = "Jabba the Hutt";
character[7] = "Jar Jar Binks";
character[8] = "Luke Skywalker";
character[9] = "Obi Wan Kenobi";
character[10] = "Princess Leia";
character[11] = "R2-D2";
character[12] = "Sheev Palpatine";
character[13] = "Yoda";
character[14] = "Rey";
character[15] = "Princess Amidala";

var characterImg = new Array(15);

characterImg[0] = new Image();
characterImg[0].src = "https://fthmb.tqn.com/lJ_4z1obcg3ogDOR-hcElg7Q-wI=/1500x1143/filters:no_upscale():fill(FFCC00,1)/jake-lloyd-56a8f97b5f9b58b7d0f6df96.jpg";

characterImg[1] = new Image();
characterImg[1].src = "file:///Users/kawaguchitakahiro/development/Word-Guess-Game/assets/images/C3PO.jpg";

characterImg[2] = new Image();
characterImg[2].src = "file:///Users/kawaguchitakahiro/development/Word-Guess-Game/assets/images/Chewbacca_TLJ.png";

characterImg[3] = new Image();
characterImg[3].src = "file:///Users/kawaguchitakahiro/development/Word-Guess-Game/assets/images/Darth%20Vader.jpg";

characterImg[4] = new Image();
characterImg[4].src = "file:///Users/kawaguchitakahiro/development/Word-Guess-Game/assets/images/Darth-Maul-1024x717.jpg";

characterImg[5] = new Image();
characterImg[5].src = "../assets/images/Han_solo.jpg";

characterImg[6] = new Image();
characterImg[6].src = "../assets/images/jabbaza hut.jpg";

characterImg[7] = new Image();
characterImg[7].src = "../assets/images/jar.jpeg";

characterImg[8] = new Image();
characterImg[8].src = "../assets/images/luke-skywalker-2-shot.jpg";

characterImg[9] = new Image();
characterImg[9].src = "../assets/images/Obi-Wan-Kenobi.jpg";

characterImg[10] = new Image();
characterImg[10].src = "../assets/images/princessleia.jpg";

characterImg[11] = new Image();
characterImg[11].src = "../assets/images/r2-d2.png";

characterImg[12] = new Image();
characterImg[12].src = "../assets/images/Sheeve Palpatine.jpg";

characterImg[13] = new Image();
characterImg[13].src = "../assets/images/Yoda.jpg";

characterImg[14] = new Image();
characterImg[14].src = "../assets/images/Ray.jpg";

characterImg[15] = new Image();
characterImg[15].src = "../assets/images/Princess Amidala.jpg";



var randomNum = Math.floor(Math.random()*character.length)
var answer = character[randomNum];
answer = answer.toUpperCase();
var imgIndex = randomNum;
var answerLength = answer.length;
var userProgress = new Array(answerLength).fill('-');


var updateGuesses = function() {
    var guessNumHtml = document.getElementById('guessNum');
    var guessesHtml = document.getElementById('guesses');
    guessNumHtml.innerHTML = guessNum;
    guessesHtml.innerHTML = guesses;
   
};

var generateQuestion = function() {
    var progressString = userProgress.join("");
    var letters = document.getElementById('letters');
    letters.innerHTML = progressString;
};

document.onkeyup = function(e) {
    var userInput = e.key;
    guesses += userInput + ", ";

    userInput = userInput.toUpperCase();
    console.log(userInput)
    checkTheLetter(userInput);
};

var updateResults = function() {
    var winsHTML = document.getElementById('wins');
    winsHTML.innerHTML = wins;
    var losesHTML = document.getElementById('loses');
    losesHTML.innerHTML = loses;
}

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

var reset = function() {
    guessNum = 8;
    guesses = "";
    randomNum = Math.floor(Math.random()*character.length)
    answer = character[randomNum];
    answer = answer.toUpperCase();
    answerLength = answer.length;
    userProgress = new Array(answerLength).fill('-');
    imgIndex = randomNum;
    updateGuesses();
    generateQuestion();
}

var printImg = function() {
    var charImgHTML = document.getElementById('charImage');
    charImgHTML.innerHTML = characterImg[imgIndex];
}

updateGuesses();
generateQuestion();



