const email = document.getElementById('email');     
const emailError = document.getElementById('emailError');       //adding error messages to email 

function displayErrorMessageEmail(message) {
    emailError.textContent = message;
    emailError.style.display = 'block';
}
function hideErrorMessageEmail() {
    emailError.textContent = "";
    emailError.style.display = 'none';
}
email.addEventListener('input', function() {
    if (email.value.indexOf('@') === -1) {
        displayErrorMessageEmail('Input must contain @');
    } else {
        hideErrorMessage();
        }
});


const firstName = document.getElementById('firstName');             //adding error messages to first name 
const errorMessage = document.getElementById('firstNameError');
function displayErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}
function hideErrorMessageName() {
    errorMessage.textContent = "";
    errorMessage.style.display = 'none';
}
firstName.addEventListener('input', function() {
    if (firstName.value.length < 5) {
        displayErrorMessage('Input must containat atleast 5 characters');
    } else {
        hideErrorMessageName();
        }
});


const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

function displayErrorMessagePassword(message) {                         //adding error messages to password 
    passwordError.textContent = message;
    passwordError.style.display = 'block';
}
function hideErrorMessagePass() {
    passwordError.textContent = "";
    passwordError.style.display = 'none';
}
function displayErrorMessageP1() {
    passwordError.textContent = message;
    passwordError.style.display = 'block';
}
password.addEventListener('input', function() {
    var inputValue = password.value;
    var nameValue = document.getElementById('firstName').value;
    if (inputValue.length < 8 ) {
      displayErrorMessagePassword("Input must be at least 8 characters long and should not be 'password' or your name");
    } else if (inputValue.toLowerCase() === 'password' || inputValue === nameValue){
        displayErrorMessageP1('password is not strong');
    }
    else{
    hideErrorMessagePass();
    };
});
  
  const confirmPassword = document.getElementById('confirmPassword');           //adding error messages to confirm password
  const errorMessageConfirm = document.getElementById('confirmError');
  function displayErrorMessageConfirm(message) {
      errorMessageConfirm.textContent = message;
      errorMessageConfirm.style.display = 'block';
  }
  function hideErrorMessageConfirm() {
      errorMessageConfirm.textContent = "";
      errorMessageConfirm.style.display = 'none';
  }
  confirmPassword.addEventListener('input', function() {
    var passwordValue = document.getElementById('password').value;
    const confirmPasswordValue = confirmPassword.value;
      if (passwordValue === confirmPasswordValue) {
          hideErrorMessageConfirm();
        } else {
          displayErrorMessageConfirm('passwords doesnt match');
          }
  });


  const phoneNumber = document.getElementById('phoneNumber');
  const errorMessagePhone = document.getElementById('phoneError');      //adding error messages to phonenumber
  
  function displayErrorMessagePhone(message) {
    errorMessagePhone.textContent = message;
    errorMessagePhone.style.display = 'block';
  }
  
  function hideErrorMessagePhone() {
    errorMessagePhone.textContent = "";
    errorMessagePhone.style.display = 'none';
  }
  
  phoneNumber.addEventListener('input', function() {
    const phoneNumberValue = phoneNumber.value;
  
    if (phoneNumberValue.length !== 10 || phoneNumberValue === "123456789") {
      displayErrorMessagePhone('Enter a valid 10-digit phone number');
    } else {
      hideErrorMessagePhone();
    }
  });


  document.addEventListener('DOMContentLoaded', function() {

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;            //function to verify human or bot by using simple addition expressions 
  
    
    const correctAnswer = num1 + num2;
  
    
    const problemElement = document.getElementById('problem');
    problemElement.textContent = `${num1} + ${num2}` + ' (Verify Human Or Bot) ';
  
    const submit= document.getElementById('submit');
    submit.addEventListener('click', function() {
      const userAnswerElement = document.getElementById('userAnswer');
      const userAnswer = parseInt(userAnswerElement.value);
  
  
      const resultElement = document.getElementById('result');
      if (userAnswer === correctAnswer) {
        resultElement.textContent = 'verified';
        resultElement.style.color = 'green';
      } else {
        resultElement.textContent = 'not verified';
        resultElement.style.color = 'red';
      }
    });
  });
  