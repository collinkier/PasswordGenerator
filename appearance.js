// create variables

var randomPassword = document.querySelector("#password");
var generatePassword = document.querySelector("#generate");
var clipboardCopy = document.querySelector("#copy");
var output = document.querySelectorAll("placeholder");
var password = "";
var number = 0;


// Make an array of all of the values

var randomCharacters = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"!","@","#","$","%","^","&","*","(","+","A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2",
"3","4","5","6","7","8","9"];

var digits = prompt("pick a range between 8 and 128");

generatePassword.addEventListener("click", function(){
    // pick 4 letters
    // loop through array
    for( var i = 0; i < digits; i++){
        number = getRandomInt(digits);
        password += randomCharacters[number];
         
    }
    // join letters
    // print letters to console log
    // console.log(password);
    randomPassword.textContent = password;
});





  function getRandomInt(max) {
      console.log(digits);
    return Math.floor(Math.random() * Math.floor(max));
    
  }






