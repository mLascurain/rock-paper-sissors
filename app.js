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
let printResult = getComputerChoise();
document.write(printResult);
