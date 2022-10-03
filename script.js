function getPasswordOptions(){

var lowercaseArray = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"]
var uppercaseArray = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"]
var numberArray = ["0,1,2,3,4,5,6,7,8,9"]
var specialCharacterArray = ["`~!@#$%^&*()"]

  var charNum = prompt("Please choose the number of characters (between 8-128) your password will be:");
 
 if (charNum <= 7) {
 alert("The password length must be between 8 and 128 characters.");
 } else if (charNum >= 129) {
 alert("The password length must be between 8 and 128 characters.");
 } else (charNum === true);

 var lowercaseConfirm = confirm("Would you like your password to contain lower case letters?");

 var uppercaseConfirm = confirm("Would you like your password to contain upper case letters?");

 var numberConfirm = confirm("Would you like your password to contain numbers?");

 var specialCharConfirm = confirm("Would you like your password to contain special characters?");

 if 
  (lowercaseConfirm !== true &&
  uppercaseConfirm !== true &&
  numberConfirm !== true &&
  specialCharConfirm !== true)
  alert("Must select at least one character type.");

if 
  (lowercaseConfirm === true && 
  uppercaseConfirm === true && 
  numberConfirm === true && 
  specialCharConfirm === true) {
}
}

 
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
 