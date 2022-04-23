// Assignment Code
var generateBtn = document.querySelector("#generate");
// Name variables
var finalPassword = "";
var superArray = [];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var special = [" ","!","#","$","%", "&", "(",")", "*", "+", ",", "-", ".","/",":", ";", "<", "=",">", "?", "@", "[", "]", "^","_", "`", "{", "|", "}", "~"];

// Get User Inptu - length
  var length = prompt("How many characters do you want your password to be (between 8 and 128)?");
  console.log ("Password length: "+ length);
 
// Notify if number is too low/too high
  if (length > 128 && length < 8) {
    var length = alert("The number must be between 8 and 128 characters. How many characters?");
  }else{ 
    var lowerCase = confirm("Would you like lowercase letters?")
    console.log ("Lower: ", lowerCase);
  if (lowerCase === true) {
    superArray = superArray.concat(lower);
  }
  console.log ("Super Array: ", superArray);
  
  var upperCase = confirm("Would you like upper case letters?");
  console.log ("Upper: ", upperCase); 
  if (upperCase === true) {
    superArray = superArray.concat(upper);
  }
  console.log ("Super Array now: ", superArray);
  
  var userNumber = confirm("Would you like numbers?")
  console.log ("Number: " +userNumber);
  if (userNumber === true) {
    superArray = superArray.concat(numbers);
  }
  
  console.log ("Super Array now: ", superArray);
  
  var specialCharacters = confirm("Would you like special characters?");
  console.log ("Special Characters: ", specialCharacters); 
  
    if (specialCharacters === true) {
      superArray = superArray.concat(special); 
  }
  
  }
// for loop that spits out random characters based on the user input
function generatePassword (){

  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * superArray.length);
    var random = superArray[randomIndex];
    console.log("random: "+random)

   finalPassword += random

    console.log("final password: "+ finalPassword)
   }
return finalPassword;

}  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("Password: ", password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
