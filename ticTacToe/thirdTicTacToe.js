const cells =  document.querySelectorAll(".cell");
const statTxt = document.querySelector("#statTxt");
const restart = document.querySelector("#restart");
const win = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
];
const winTwo = [
    [0, 1, 2, 5, 6, 7, 10, 11, 12],
    [5, 6, 7, 10, 11, 12, 15, 16, 17],
    [10, 11, 12, 15, 16, 17, 20, 21, 22],
    [1, 2, 3, 6, 7, 8, 11, 12, 13],
    [6, 7, 8, 11, 12, 13, 16, 17, 18],
    [11, 12, 13, 16, 17, 18, 21, 22, 23],
    [2, 3, 4, 7, 8, 9, 12, 13, 14],
    [7, 8, 9, 12, 13, 14, 17, 18, 19],
    [12, 13, 14, 17, 18, 19, 22, 23, 24]
];

let options = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
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
        const cellE = options[condition[4]];

        if(cellA == "" || cellB == "" || cellC == "" || cellD == "" || cellE == ""){
            continue
        }
        if(cellA == cellB && cellB == cellC && cellC == cellD && cellD == cellE){
            roundWon = true;
            break;
        }
    }

        for(let i = 0; i < winTwo.length; i++){
        const condition = winTwo[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        const cellD = options[condition[3]];
        const cellE = options[condition[4]];
        const cellF = options[condition[5]];
        const cellG = options[condition[6]];
        const cellH = options[condition[7]];
        const cellI = options[condition[8]];

        if(cellA == "" || cellB == "" || cellC == "" || cellD == "" || cellE == "" || cellF == "" || cellG == "" || cellH == "" || cellI == ""){
        continue
        }
        if(cellA == cellB && cellB == cellC && cellC == cellD && cellD == cellE && cellE == cellF && cellF == cellG && cellG == cellH && cellH == cellI){
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
debugger;

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    statTxt.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
console.log();