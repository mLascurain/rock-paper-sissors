let userWin = 0;
let computerWin = 0;
function playGame(){
function getComputerChoise(){
    let getNumber = Math.floor(Math.random()*3);
    if (getNumber == 0){
        return "Sissors";
    }
    else if(getNumber == 1){
        return "Paper";
    }
    else if(getNumber == 2){
        return "Rock";
    }
}
let computerChoise = getComputerChoise();

function getUserChoise(){
    let userChoise = prompt("Pick between [1 - Rock] [2 - Paper] [3 - Sissors]");
    if(userChoise == 1){
        return "Rock";
    }
    else if(userChoise == 2){
        return "Paper";
    }
    else if(userChoise == 3){
        return "Sissors";
    }
}
let userChoise = getUserChoise();

function singleRound(){
    if(userChoise == computerChoise){
        return "Draw";
    }
    else if(userChoise !== computerChoise){
        if(userChoise == "Rock"){
            if(computerChoise == "Paper"){
                return "You loose";
            }
            else{
                return "You won";
            }
        }
        if(userChoise == "Paper"){
            if(computerChoise == "Sissors"){
                return "You loose";
            }
            else{
                return "You won";
            }
        }
        if(userChoise == "Sissors"){
            if(computerChoise == "Rock"){
               return "You loose";
            }
            else{
                return "You won";
            }
        }
    }
}

if(singleRound() == "You won"){
    userWin++;
}else if(singleRound() == "You loose"){
    computerWin++;
}
let userWinPrint = 'Your Score: ' + userWin;
let computerWinPrint = "Computer Score: " + computerWin;
document.write(userWinPrint + "<br>");
document.write(computerWinPrint + "<br>" + "<br>");
document.write("<b>" + singleRound());

let playAgain = confirm("Do you want to keep playing?");
    if(playAgain == true){
        playGame();
    }
}

let play = confirm("Do you want to play?");
if(play == true){
    playGame();
}
