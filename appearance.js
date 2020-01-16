// create variables

var randomPassword = document.querySelector("#password");
var generatePassword = document.querySelector("#generate");
var clipboardCopy = document.querySelector("#copy");
var output = document.querySelectorAll("placeholder");
var range = document.querySelector("#customRange1");
var rangeLabel = document.querySelector("#textInput");
var password = "";
var number = 0;


// Make an array of all of the values

var randomCharacters = ["A","a","!","B","b","@","C","c","$","D","d","%",
"E","e","^","F","f","&","G","g","(","+","H","h","#","I","i","!",
"J","j","@","K","k","$","L","l","%","M","m","^","N","n","(","O","o","+",
"p","p","#","Q","q","!","R","r","@","S","s","$","T","t","%","U","u",
"^","V","v","&","W","w","*","X","x","(","Y","y","+","Z","z","#"];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var speacialCase = ["!","@","$","%","^","&","(","+","#"];



// document.createElement("li");
// li.innerHTML = range.textContent;
// document.rangeLabel.appendChild(li.textContent);

function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}

var digits = rangeLabel;


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

console.log();





  function getRandomInt(max) {
      console.log(digits);
    return Math.floor(Math.random() * Math.floor(max));
    
  }






