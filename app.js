let cells = document.querySelectorAll('.row > div');
let currentPlayer;
let shape = 1;


for (let i = 0; i < cells.length; i++){
    cells[i].innerText == '';
    cells[i].addEventListener('click', cellClicked);
}


function cellClicked(event){ //Handles the click and player swap.
    if (event.target.textContent !== '') return; //If cell is not empty stop

    if (shape == 1) {
        currentPlayer = 'X';
        event.target.textContent = currentPlayer;
        shape = 0;
    } else {
        currentPlayer = 'O';
        event.target.textContent = currentPlayer;
        shape = 1;
    }
 
    winningCondition();
}

function winningCondition(){
    if (cells[0].textContent == cells[1].textContent &&
        cells[1].textContent == cells[2].textContent &&
        cells[0].textContent == 'X'){
            console.log("X Won!");
        }

    console.log(cells[0].classList);
    console.log(cells[1].textContent);
    console.log(cells[2].textContent);
}

