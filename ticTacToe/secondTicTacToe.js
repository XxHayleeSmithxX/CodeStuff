const cells =  document.querySelectorAll(".cell");
const statTxt = document.querySelector("#statTxt");
const restart = document.querySelector("#restart");
const win = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
    [0, 1, 4, 5],
    [4, 5, 8, 9],
    [8, 9, 12, 13],
    [2, 3, 6, 7],
    [6, 7, 10, 11],
    [10, 11, 14, 15],
    [1, 2, 5, 6],
    [5, 6, 9, 10],
    [9, 10, 13, 14],
];

let options = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restart.addEventListener("click", restartGame);
    statTxt.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, ticTacToe){
    options[ticTacToe] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statTxt.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
    let roundWon = false;
    for(let i = 0; i < win.length; i++){
        const condition = win[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        const cellD = options[condition[3]];

        if(cellA == "" || cellB == "" || cellC == "" || cellD == ""){
            continue
        }
        if(cellA == cellB && cellB == cellC && cellC == cellD){
            roundWon = true;
            break;
        }
    }
    
    if(roundWon){
        statTxt.textContent = `${currentPlayer} WINS!`;
        running = false;
    }
    else if(!options.includes("")){
        statTxt.textContent = "draw...";
        running = false;
    }
    else{
        changePlayer();
    }
}

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    statTxt.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
console.log();