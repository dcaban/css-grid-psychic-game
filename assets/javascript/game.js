var comPick;
var guessedLetterArray = []; // Creating an empty array for our user input.
var userPick;
var win = 0;
var losses = 0;
var guessLeft = 9;
var letArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function write() {
    document.querySelector("#wins").innerHTML = win;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guesses").innerHTML = guessLeft;
}

function randletter() {
    // This will produce the random letters
    var randomNum = Math.floor(Math.random() * 25);
    comPick = letArray[randomNum];
    return comPick;
}

function resetguessedLetterArray() {
    // resets guessedLetterArray.
    guessedLetterArray.length = 0;
    return guessedLetterArray.length;
}

function resetguessLeft() {
    // resets the guessleft.
    guessLeft = 9;
    return guessLeft;
}

function reset() {
    resetguessLeft();
    resetguessedLetterArray();
    randletter();
}

function compare() {
    // Check if letter has already been entered
    // If yes, then do nothing

    if (guessedLetterArray.indexOf(userPick) != -1) {

        return;
    }

    // If not then add to guessedLetterArray then proceed with comparison
    guessedLetterArray.push(userPick);
    document.querySelector("#letterArray").innerHTML += userPick + ", ";
    guessLeft--;
    document.querySelector("#guesses").innerHTML = guessLeft;

    console.log("Compick: " + comPick + " Userpick: " + userPick);
    if (comPick == userPick) {
        win++;
        document.querySelector("#wins").innerHTML = win;
        guessedLetterArray = [];
        document.querySelector("#letterArray").innerHTML = " ";
        document.querySelector("#guesses").innerHTML = 9;
        guessLeft = 9;
        randletter();

    } else if (guessLeft < 1) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        guessedLetterArray = [];
        document.querySelector("#letterArray").innerHTML = " ";
        guessLeft = 9;
        document.querySelector("#guesses").innerHTML = guessLeft;
        randletter();
    }
}

reset();
write();

document.onkeyup = function(event) {
    write();
    userPick = String.fromCharCode(event.keyCode).toLowerCase();

    var keyPressed = event.keyCode || event.which;
    console.log(keyPressed);
    if (keyPressed < 65 || keyPressed  > 90) {
        return ;
    }

    // It takes the user's response and "pushes" (or add the
    compare();
};
