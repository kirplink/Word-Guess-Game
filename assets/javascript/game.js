let rightLetter = [];
let wrongLetter = [];
let underscore = [];
const acceptableInput = "abcdefghijklmnopqrstuvwxyz"

// dom manipulation here
let blankSpaces = document.getElementById('underscores');
let letterBank = document.getElementById('letter-bank');

// word bank for the game
const wordBank = ["teacher", "apple", "highlighter", "crayon", "algerbra", "paperclip", "eraser", "folder", "student", "scissors"];
// computer choosing random word from wordBank array
let computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(computerChoice);

let generateUndersores = () => {
    for (let i = 0; i < computerChoice.length; i++) {
        underscore.push('_');
        rightLetter.push('_');
    }

    return underscore;
}

document.onkeyup = (event) => {
    let letterGuess = event.key;
    
    if (acceptableInput.indexOf(letterGuess) > -1){
        if (computerChoice.indexOf(letterGuess) > -1) 
        {
            for (let i = 0; i < computerChoice.length; i++) 
            {
                if (computerChoice[i] === letterGuess) 
                {
                rightLetter[i] = letterGuess;
                } 
            } 
        } else if (wrongLetter.indexOf(letterGuess) > -1){
            console.log("already guessed")
        }   else {
            wrongLetter.push(letterGuess);
        }
    }
    blankSpaces.textContent = rightLetter.join('');
    letterBank.textContent = wrongLetter.join('');
    console.log("Right " + rightLetter);
    console.log("Wrong " + wrongLetter);
}

generateUndersores();
blankSpaces.textContent = rightLetter.join('');