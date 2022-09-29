function passwordInit(){
 var charNum = prompt("Please choose the number of characters (between 8-128) your password will be:");

if (charNum <= 7) {
alert("The password length must be between 8 and 128 characters.");
} else if (charNum >= 129) {
alert("The password length must be between 8 and 128 characters.");
} else (charNum === true) 
}
console.log(charNum);

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
