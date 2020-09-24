
const html = document.querySelector('html');
const head = document.querySelector('head');
const body = document.querySelector('body');


              /*        Login Section       */

/* Login Div */
const loginDiv = document.createElement('div');
loginDiv.id= 'loginDiv';

/* BackGround Div */
const backgroundDiv = document.createElement('div');
backgroundDiv.id= 'backgroundDiv';

body.appendChild(backgroundDiv)
backgroundDiv.appendChild(loginDiv)

/* Login Form */
const loginForm = document.createElement('form');
loginForm.id= 'loginForm';
loginDiv.appendChild(loginForm);

function setInputField(inputType){
  const inputField = document.createElement('input');
  inputField.placeholder= 'Enter ' + inputType;
  inputField.id= inputType + 'Input';
  inputField.className = 'inputField';

  if (inputType === 'password'){
    inputField.type = inputType
  }
  else {
    inputField.type = 'text';
    inputField.name = 'name';
  }

  return inputField;
}

function setNameInput(){
  return setInputField('name')
}

function setPasswordInput(){
  return setInputField('password')
}


function setSubmitBtn(){

  // Create button
  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Login';
  submitBtn.className = 'submitBtn';



  submitBtn.addEventListener('click',function (ev){
    ev.preventDefault();
    // Validate general password
    if (document.getElementById('passwordInput').value === '123'){
      let userName = document.getElementById('nameInput').value;

       // Check that userName isn't empty
       if (userName === ''){
          alert('Name can\'t be empty');
        }
       else {
         // window.location = 'tictactoe.html';
         setHomePage(userName); // Function that removes login div.
       }
    }

    else {
      alert('Wrong password or incorrect name, try again')
    }
  })
  return submitBtn;
}

function appendToLoginForm(setup){
  loginForm.appendChild(setup)
}


                     /* Home Page Functions */
function setHomePage(name){

  //Remove existing items
  document.getElementById('backgroundDiv').remove();

  // Set Greeting
  const header = document.createElement('header')
  header.textContent = 'Hello ' + name;
  body.appendChild(header)

  // Set Title
  const title = document.getElementById('loginTitle');
  title.textContent = 'Home Page';
}


function startApp(){
  appendToLoginForm(setNameInput());
  appendToLoginForm(setPasswordInput())
  appendToLoginForm(setSubmitBtn())
}

startApp();
