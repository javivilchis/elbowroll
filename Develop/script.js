// Assignment Code May 21, 2021
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
 confirm("Please answer the following questions to generate your password.");
  var passwordRange = prompt("Please enter a length of your password 8 - 128 characters long");
  if (passwordRange < 8){
   passwordRange = prompt("Please enter a length of your password 8 - 128 characters long");
   return;
  } else {
    var lowerCase = confirm("Do you want to include lowercase in your password?");
    var upperCase = confirm("Do you want to include uppercase in your password?");
    var number = confirm("Do you want to include number in your password?");
    var specialCharacter = confirm("Do you want to include special characters in your password?");
  }
  // create a password
  var password = createPassword(passwordRange, lowerCase,upperCase,number,specialCharacter);
  // return value
  return password;
}

// create password
function createPassword(passwordRange, lowerCase,upperCase,number,specialCharacter){
  // declare the charCodes variable before adding anything to it. otherwise it will be undefined.
  var charCodes = [];
  // start the checklist
  if(lowerCase){
    charCodes = charCodes.concat(allLowerCaseChar);
  };
  if(upperCase){
    charCodes = charCodes.concat(allUpperCaseChar);
  }
  if(number){
    charCodes = charCodes.concat(allNumbers);
  }
  if(specialCharacter){
    charCodes = charCodes.concat(allSpecialChar);
  }

  //store password 
  var passwordCharacters = [];
  
  //loop through all of our characters
  for(var i = 0; i < passwordRange; i++){
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  // return the generated list
  return passwordCharacters.join("");
}

// DRY yo self!
// setting all of the available characters and numbers
var allUpperCaseChar = arrayFromlowToHigh(65,90);
var allLowerCaseChar = arrayFromlowToHigh(97,122);
var allNumbers = arrayFromlowToHigh(48,57);
var allSpecialChar = arrayFromlowToHigh(33,47).concat(arrayFromlowToHigh(58,64)).concat(arrayFromlowToHigh(91,96)
).concat(arrayFromlowToHigh(123,126));

//blackbox to generate charCode array
function arrayFromlowToHigh(low,high){
  var array =[];
  for(i=low; i <= high; i++){
    array.push(i);
  }
  return array;
}