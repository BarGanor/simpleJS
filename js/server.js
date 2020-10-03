
const head= document.querySelector('head');
const title= document.createElement('title');
title.text = 'To Do List';
title.className = 'hidden';
head.appendChild(title);

/*              Header Functions              */


// Create Header
function getHeader(){
  const myHeader = document.createElement('header')
  myHeader.textContent = 'My To Do List'
  return myHeader
}
function appendHeader() {
  const myBody = document.querySelector("body");
  document.body.prepend(getHeader());
}
appendHeader();

/*              Input Functions              */
function setInputField(){
  const myInputField = document.createElement('input') // Create field

  // Set Attributes
  myInputField.type= 'text';
  myInputField.placeholder = 'Title';
  myInputField.id= 'myInput';

  // Append to html
  document.body.appendChild(myInputField);
}

function setInputBtn(){
  const inputBtn = document.createElement('button'); //Create button

  // Set attributes
  inputBtn.textContent = 'Add';
  inputBtn.id= 'addBtn';
  inputBtn.setAttribute('onclick', 'newElement();');

  document.body.appendChild(inputBtn)
}

setInputField();
setInputBtn();

/*              List Functions              */

// Create new list
function setList() {
  const ul = document.createElement('ul')
  document.body.appendChild(ul)
}

//Create List Items
function newElement(){
  // Create elements
  let ul = document.querySelector('ul')
  let li = document.createElement("li");
  let remove = document.createElement("button");

  // Set elements attributes
  remove.setAttribute('class', 'removeBtn');
  remove.textContent = 'Remove Item'
  remove.addEventListener('click', function (ev){
    li.remove();
  })
  li.textContent = document.getElementById("myInput").value;

  // Append elements to html page
  ul.appendChild(li);
  ul.appendChild(remove);
}


setList();



