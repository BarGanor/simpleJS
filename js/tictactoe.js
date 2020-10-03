
const html = document.querySelector('html');
const body = document.querySelector('body');


homePage();

/* Set Navbar functionality */

// If Home is picked
const homeNav= document.getElementById('homeNav')
homeNav.addEventListener('click', (ev => {
  homePage();
}))

const tictactoeNav= document.getElementById('tictactoeNav');
tictactoeNav.addEventListener('click',(ev => {
  tictactoe();
}))

const toDoListNav= document.getElementById('toDoListNav');
toDoListNav.addEventListener('click',(ev => {
  toDoList();
}))


                      /*  Home Page Related  */
function homePage(){
  try {
    document.getElementById('mainContainer').remove();
  }
  catch(err) {
    console.log('no such div yet');
  }

  const homePageDiv= document.createElement('div');
  homePageDiv.id= 'mainContainer';
  homePageDiv.textContent= 'Home Page';

  const homePageP= document.createElement('p');
  homePageP.textContent= 'Home Page Paragraph';
  homePageDiv.appendChild(homePageP);
  body.appendChild(homePageDiv);
}


/*  To Do List Related  */

function toDoList(){

  /* Delete previous content */
  try {
    document.getElementById('mainContainer').remove();
  }
  catch (e) {
    console.log('')
  }

  // Create to do list div
  const toDoListDiv= document.createElement('div');
  toDoListDiv.id= 'mainContainer';
  body.appendChild(toDoListDiv);

  // Create list
  const ul = document.createElement('ul')
  toDoListDiv.appendChild(ul)

  if (localStorage["list"]) { // checking, if there is something in localstorage
    const ul= document.createElement('ul')
    ul.innerHTML = localStorage["list"];
    toDoListDiv.appendChild(ul);
    for (const child of ul.children) {
      child.addEventListener('click',(ev => {
        if (child.style.backgroundColor === 'black'){
          child.style.backgroundColor= 'white';
          child.style.textDecoration= 'none';
          child.style.color= 'black';
        } else {
          child.style.backgroundColor = 'black';
          child.style.textDecoration = 'line-through';
          child.style.color = 'white';
        }
      }))
    }
    const listOfBtn= document.getElementsByClassName('removeBtn');
    for (const btn of listOfBtn) {
      btn.addEventListener('click', (()=>{
        btn.parentElement.remove();
        localStorage["list"]= ul.innerHTML; // Updating local storage
      }));
    }
  }

  /* Create  */
  function setInputField(){
    const myInputField = document.createElement('input') // Create field

    // Set Attributes
    myInputField.type= 'text';
    myInputField.placeholder = 'Title';
    myInputField.id= 'myInput';

    // Append to html
    toDoListDiv.insertBefore(myInputField, ul);
  }

  function setInputBtn(){
    const inputBtn = document.createElement('button'); //Create button

    // Set attributes
    inputBtn.textContent = 'Add';
    inputBtn.id= 'addBtn';
    inputBtn.addEventListener('click', (() => {
      newElement();

    }))

    toDoListDiv.insertBefore(inputBtn, ul);
  }

  setInputField();
  setInputBtn();

  function newElement(){

    console.log(localStorage["list"])

    // Create elements
    const ul = document.querySelector('ul');
    const li = document.createElement("li");
    const removeBtn = document.createElement("button");

    // Set elements attributes
    removeBtn.setAttribute('class', 'removeBtn');
    removeBtn.textContent = 'Remove'
    removeBtn.addEventListener('click', (() => {
      li.remove();
      localStorage["list"]= ul.innerHTML; // Updating local storage
    }));

    li.className= 'toDoItem'
    li.textContent = document.getElementById("myInput").value;


    li.addEventListener('click', (() => {
      if (li.style.backgroundColor === 'black'){
        li.style.backgroundColor= 'white';
        li.style.textDecoration= 'none';
        li.style.color= 'black';
      } else {
        li.style.backgroundColor = 'black';
        li.style.textDecoration = 'line-through';
        li.style.color = 'white';
      }
    }))

    // Append elements to html page
    li.appendChild(removeBtn);
    ul.appendChild(li);
    localStorage["list"] = ul.innerHTML // updating localstorage
  }

}


                      /*  Tic Tac Toe Related  */
function tictactoe() {

// Game variables
  let xIsNext = true;
  let board= [0,0,0,0,0,0,0,0,0]

  /* Delete previous content */
  document.getElementById('mainContainer').remove();

  /* set tic tac toe image */
  const ticTacToeDiv = document.createElement('div');
  ticTacToeDiv.className = 'tictactoeDiv';
  ticTacToeDiv.id= 'mainContainer';
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
  statusDiv.textContent = 'x is next';
  statusActionDiv.appendChild(statusDiv)

  // Reset div
  const resetDiv = document.createElement('div');
  resetDiv.className = 'resetDiv';
  resetDiv.textContent = 'reset';
  statusActionDiv.appendChild(resetDiv)

  /* set grid */
  // set game grid div
  const gameGrid = document.createElement('div')
  gameGrid.className = 'gameGrid'
  ticTacToeDiv.appendChild(gameGrid);


  for (let i = 0; i < 9; i++) {
    const gameCell = document.createElement('div')
    gameCell.className = 'gameCell'
    gameCell.id = 'gameCell' + i;
    gameGrid.appendChild(gameCell);
  }


  /*                                Game Logic                            */
  const cellDivs = document.querySelectorAll('.gameCell');

  /* Event Handlers */

  resetDiv.addEventListener('click', (() => {
    for (const cellDiv of cellDivs) {
      cellDiv.textContent = '';
    }
    statusDiv.textContent = 'x is next';
    board= [0,0,0,0,0,0,0,0]
  }))


  for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', (() => {
      console.log('board: '+ board)

      let currLocation = cellDiv.id.slice(-1);
      currLocation = Number(currLocation);

      if (statusDiv.textContent=== 'x is next' && cellDiv.textContent === '') {
        cellDiv.textContent = 'X';
        xIsNext = false;
        statusDiv.textContent = 'O is next';
        board[currLocation] = 1;

      } else if (statusDiv.textContent=== 'O is next' && cellDiv.textContent === '') {
        cellDiv.textContent = 'O';
        xIsNext = true;
        statusDiv.textContent = 'x is next';
        board[currLocation] = -1;
      }

      cellDiv.style.fontSize = '100px'

      let twoDimBoard = boardToTwoDim(board);
      if (checkIfGameEnded(twoDimBoard)){
        board= [0,0,0,0,0,0,0,0]
      }



    }))

  }

  function clearBoard(){
    for (const cellDiv of cellDivs) {
      cellDiv.textContent = '';
    }
  }

  function newGame(){
    clearBoard();
    statusDiv.textContent= 'x is next'
  }

  function checkIfGameEnded(board) {
    let colSum = 0;
    let rowSum = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (Number(board[i][j]) === 1) {
          rowSum += 1;
        } else if (Number(board[i][j]) === -1) {
          rowSum -= 1;
        }
      }
      console.log('row ' + rowSum)
      if (rowSum === 3) {
        if(confirm('Cross won! Would you like to play again?')){
          newGame();
          return true;
        }

      } else if (rowSum === -3) {
        if (confirm('Circle won! Would you like to play again?')) {
          newGame();
          return true;
        }

      }
    }

    /* Check rows */

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (Number(board[j][i]) === 1) {
          colSum += 1;
        } else if (Number(board[j][i]) === -1) {
          colSum -= 1;
        }
      }

      if (colSum === 3)

        if(confirm('Cross won! Would you like to play again?')){
          newGame();
          return true;
        }

      else if (colSum === -3)
          if(confirm('Circle won! Would you like to play again?')){
            newGame();
            return true;
          }
    }

    let leftToRightCross = board[0]+board[4]+board[8];
    let reducer = (accumulator, currentValue) => accumulator + currentValue;



    // let sum= leftToRightCross.reduce(reducer())
    // console.log(sum);
    console.log(leftToRightCross)

    let rightToLeftCroos = [board[2],board[4],board[6]];

    /* Check crosses */
    if (leftToRightCross===3 || rightToLeftCroos===3) {
      if (confirm('Cross won! Would you like to play again?')) {
        newGame();
        return true;
      }
    }

    if (leftToRightCross===-3 || rightToLeftCroos===-3) {
      if (confirm('Circle won! Would you like to play again?')) {
        newGame();
        return true;
      }
    }
  }
  function boardToTwoDim(board) {
    return [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]]
    ];
  }
}


/* ענבר פלמר, ליטל האבר */


