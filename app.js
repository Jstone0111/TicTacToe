let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', cellClicked);
}

let shape = 1;
function cellClicked(){

    if (shape == 1) {
        event.target.textContent = 'X'
        shape = 0;
    } else {
        event.target.textContent = 'O'
        shape = 1;
    }
}  