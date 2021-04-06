let cells = document.querySelectorAll('.row > div');
let currentPlayer = 'X';


for (let i = 0; i < cells.length; i++){
    cells[i].innerText == '';
    cells[i].addEventListener('click', cellClicked);
}


function cellClicked(event){ //Handles the click and player swap.
    if (event.target.textContent !== '') return; //If cell is not empty stop

    if (currentPlayer === 'X') {
        event.target.textContent = currentPlayer;
        currentPlayer = 'O';
    } else {
        currentPlayer = 'O';
        event.target.textContent = currentPlayer;
        currentPlayer = 'X';
    }
 
    checkWin();
}

function checkWin(){
    if (
        (cells[0].textContent !== '' && cells[0].textContent === cells[1].textContent && cells[2].textContent) ||
        (cells[3].textContent !== '' && cells[3].textContent === cells[4].textContent && cells[5].textContent) ||
        (cells[6].textContent !== '' && cells[6].textContent === cells[7].textContent && cells[8].textContent) ||
        
        (cells[0].textContent !== '' && cells[0].textContent === cells[3].textContent && cells[6].textContent) ||
        (cells[1].textContent !== '' && cells[1].textContent === cells[4].textContent && cells[7].textContent) ||
        (cells[2].textContent !== '' && cells[2].textContent === cells[5].textContent && cells[8].textContent) ||
        
        (cells[0].textContent !== '' && cells[0].textContent === cells[4].textContent && cells[8].textContent) ||
        (cells[2].textContent !== '' && cells[2].textContent === cells[4].textContent && cells[6].textContent)
    )  {
        if (currentPlayer === 'X'){
            alert('O Wins!');
        } else{
                alert('X Wins!');
        }
    }
}   


