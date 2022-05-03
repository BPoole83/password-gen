// Assignment code here
var specialCharacters = ["!@#$%^&*_-+="]; 
var numericCharacters = ["0123456789"]; 
var lowerCasedCharacters = ["abcdefghijklmnopqrstuvwxyz"]; 
var upperCasedCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 

function generatePassword() {
  // Variable to store length of password from user input
  var choices = "" // or array your choice based off of step 2
  var password = "" // or array your choice based off of step 2

  var length = prompt
  var hasSpecialCharacters = confirm

  var hasNumericCharacters = confirm

  var hasLowerCasedCharacters = confirm

  var hasUpperCasedCharacters = confirm

  if(hasSpecialCharacters) {
    // step 6
  }
  if(hasUpperCasedCharacters) {
    // step 6
  }
  if(hasNumericCharacters) {
    // step 6
  }
  if(hasLowerCasedCharacters) {
    // step 6
  }
  // make the loop end at length variable from prompt 
  for() {
    password += choices[Math.floor(Math.random() * choices.length)]
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
