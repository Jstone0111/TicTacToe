let cells = document.querySelectorAll('.row > div');
let currentPlayer = 'X';
let gameStatus = false;
let moves = 0;


for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', cellClicked);
}


function cellClicked(event){
    if (event.target.textContent !== '' || gameStatus === true) return; //If cell is not empty or the game is over, stop.

    if (currentPlayer === 'X') {
        event.target.textContent = currentPlayer;
        currentPlayer = 'O';
    } else {
        currentPlayer = 'O';
        event.target.textContent = currentPlayer;
        currentPlayer = 'X';
    }

    moves++;
 
    checkWin();
}

function checkWin(){
    if (
        (cells[0].textContent !== '' && cells[0].textContent === cells[1].textContent && cells[0].textContent === cells[2].textContent) ||
        (cells[3].textContent !== '' && cells[3].textContent === cells[4].textContent && cells[3].textContent === cells[5].textContent) ||
        (cells[6].textContent !== '' && cells[6].textContent === cells[7].textContent && cells[6].textContent === cells[8].textContent) ||
        
        (cells[0].textContent !== '' && cells[0].textContent === cells[3].textContent && cells[0].textContent === cells[6].textContent) ||
        (cells[1].textContent !== '' && cells[1].textContent === cells[4].textContent && cells[1].textContent === cells[7].textContent) ||
        (cells[2].textContent !== '' && cells[2].textContent === cells[5].textContent && cells[2].textContent === cells[8].textContent) ||
        
        (cells[0].textContent !== '' && cells[0].textContent === cells[4].textContent && cells[0].textContent === cells[8].textContent) ||
        (cells[2].textContent !== '' && cells[2].textContent === cells[4].textContent && cells[2].textContent === cells[6].textContent)
    )  {
        if (currentPlayer === 'X'){
            alert('O Wins!');
        } else{
            alert('X Wins!');
        }

        let playAgain = confirm('Would you like to play again?');
        if (playAgain === true){
            location.reload();
        }

        gameStatus = true;
    } else if (moves === 9){
        alert('It is a draw!')
        
        let playAgain = confirm('Would you like to play again?');
        
        if (playAgain === true){
            location.reload();
        }

        gameStatus = true;
    }
}   


