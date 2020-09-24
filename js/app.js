const html = document.querySelector('html');
const head = document.querySelector('head');
const body = document.querySelector('body');

/* set tic tac toe image */
const ticTacToeDiv = document.createElement('div');
ticTacToeDiv.className= 'container';
body.appendChild(ticTacToeDiv);

/* set tic tac toe title */
const title = document.createElement('h1');
title.className = 'title';
title.innerHTML = "Tic <span>Tac</span> Toe"
ticTacToeDiv.appendChild(title);

/* set status action div */
const statusActionDiv = document.createElement('div');
statusActionDiv.className = 'statusAction';
ticTacToeDiv.appendChild(statusActionDiv);

/* Children of status action div */

// Status div
const statusDiv = document.createElement('div');
statusDiv.className = 'statusDiv';
statusDiv.textContent= 'x in next';
statusActionDiv.appendChild(statusDiv)

// Reset div
const resetDiv = document.createElement('div');
resetDiv.className = 'resetDiv';
resetDiv.textContent= 'reset';
statusActionDiv.appendChild(resetDiv)

/* set grid */
// set game grid div
const gameGrid = document.createElement('div')
gameGrid.className= 'gameGrid'
ticTacToeDiv.appendChild(gameGrid);


for (let i = 0; i < 9; i++) {
  const gameCell = document.createElement('div')
  gameCell.className = 'gameCell'
  gameCell.id= 'gameCell' + i;
  gameGrid.appendChild(gameCell);
}


/*                                Game Logic                            */
const cellDivs = document.querySelectorAll('.gameCell');

/* Event Handlers */

resetDiv.addEventListener('click', (ev => {
  console.log(ev)
}))

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', (ev => {

    ir
  }))
}

// Game variables
let gameIsLive= true;
let xIsNext = true;


