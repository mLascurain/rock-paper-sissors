console.log("que onda paaa");
function getComputerChoise(){
    let getNumber = Math.random(3);
    if (getNumber == 0){
        return "rock";
    }
    else if (getNumber == 1){
        return "paper";
    }
    else if(getNumber == 2){
        return "sissors";
    }
}
let printResult = getComputerChoise();
console.log(printResult);
