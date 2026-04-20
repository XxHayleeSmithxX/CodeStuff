const choices = ["rock", "paper", "scissors", "shoot"];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const whoWon = document.getElementById("whoWon");
const playerScoreDis = document.getElementById("playerScoreDis");
const computerScoreDis = document.getElementById("computerScoreDis");
let playerScore = 0;
let computerScore = 0;

function playGame(player){

    const computer = choices[Math.floor(Math.random() * 4)];
    let result = ""

    if(player === computer) {
        result = "TIE!";
    }
    else {
        switch(player){
            case "rock":
                result = (computer === "scissors") ? "WIN :)" : "LOOSE :(";
                break;
            case "paper":
                result = (computer === "rock") ? "WIN :)" : "LOOSE :(";
                break;
            case "scissors":
                result = (computer === "paper") ? "WIN :)" : "LOOSE :(";
                break;
            case (computer === "shoot"):
                result = "LOOSE :(";
                break;
    }
}

    playerChoice.textContent = `YOU: ${player}`;
    computerChoice.textContent = `COMPUTER: ${computer}`;
    whoWon.textContent = result;

    switch(result){
        case "WIN :)":
            playerScore++;
            playerScoreDis.textContent = playerScore;
            break;
        case "LOOSE :(":
            computerScore++;
            computerScoreDis.textContent = computerScore;
            break;
    }

    console.log(computer);
}


