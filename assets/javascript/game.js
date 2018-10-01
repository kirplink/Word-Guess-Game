// global variables, because those are cosher
let rightLetter = [];
let wrongLetter = [];
let underscore = [];
const beginingNumberOfTries = 8;
let triesRemaining = beginingNumberOfTries;
let losses = 0;
let wins = 0;

// dom manipulation here
const blankSpaces = document.getElementById('underscores');
const letterBank = document.getElementById('letter-bank');
const remainingChances = document.getElementById('tries-rem');
const lossNum = document.getElementById('loss-num');
const winNum = document.getElementById('win-num');


// word bank for the game
const wordBank = ["teacher", "apple", "highlighter", "crayon", "algebra", "paperclip", "eraser", "folder", "student", "scissors"];
// computer choosing random word from wordBank array
let computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)];



let generateUndersores = () => {
    for (let i = 0; i < computerChoice.length; i++) {
        // underscore.push('_');
        rightLetter.push('_');
    }

    return rightLetter;
}

let gameRun = (x) => {
    console.log(computerChoice);
    const acceptableInput = "abcdefghijklmnopqrstuvwxyz"
    if (acceptableInput.indexOf(x) > -1){
        if (computerChoice.indexOf(x) > -1) 
        {
            for (let i = 0; i < computerChoice.length; i++) 
            {
                if (computerChoice[i] === x) 
                {
                rightLetter[i] = x;
                } 
            } 
        } else if (wrongLetter.indexOf(x) > -1){
            console.log("already guessed/not acceptable input");
        }   else {
            wrongLetter.push(x);
            guessesRemaining();
            
        }
    }
}

// remove one from triesRemaining and checks if you have run out of guesses
let guessesRemaining = () => {
    triesRemaining--
    remainingChances.textContent = triesRemaining;
    if (triesRemaining <= 0) {
        alert("You lose. The word was " + computerChoice);
        losses++
        lossNum.textContent = losses;
        gameReset();
        
    }
}

//run to see if win codition has been met
const gameWin = () => {
    if (rightLetter.join('') === computerChoice) {
        alert('you win!');
        wins++
        winNum.textContent = wins;
        gameReset();
        
    }
}

const gameReset = () => {
    computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(computerChoice);
    rightLetter.length = 0;
    wrongLetter.length = 0;
    triesRemaining = beginingNumberOfTries
    generateUndersores();
    remainingChances.textContent = triesRemaining;
    blankSpaces.textContent = rightLetter.join('');
    letterBank.textContent = wrongLetter.join(' ');
}



document.onkeyup = (event) => {
    let letterGuess = event.key.toLowerCase();
    // console.log(letterGuess);
    
    gameRun(letterGuess);
    blankSpaces.textContent = rightLetter.join('');
    letterBank.textContent = wrongLetter.join(' ');
    gameWin();
    
}

generateUndersores();
blankSpaces.textContent = rightLetter.join('');
remainingChances.textContent = triesRemaining;
winNum.textContent = wins;
lossNum.textContent = losses;