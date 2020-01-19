

var randomPassword = document.querySelector("#password");
var generatePassword = document.querySelector("#generate");
var clipboardCopy = document.querySelector("#copy");
var output = document.querySelectorAll("placeholder");
var range = document.querySelector("#customRange3");
var rangeLabel = document.querySelector("#textInput");
var password = "";
var pwdLessLastChar="";
var number = 0;
var digits = 15;
var digitsStr = "15";
var upperCaseCount=0;
var lowerCaseCount=0;
var specialCharCount=0;


// Make an array of all of the values

var allCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","$","%","&","#"];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var specialCase = ["!","@","$","%","&","#"];

var count = 0;


function updateTextInput(val) {
   digitsStr = val;
   document.getElementById('textInput').value=val;
  }  //terminates updateTextInput function

generatePassword.addEventListener("click", function(){
   //alert(specialCase.length);
   password="";
   //isFetchCharUpper=0;
   upperCaseCount=0;
   lowerCaseCount=0;
   specialCharCount=0;
   digits = digitsStr;
    // pick 4 letters
    // loop through array
    for( var i = 0; i < digits; i++){
        listlength=allCharacters.length;
        number = getRandomInt(listlength);
        fetchCharacter = allCharacters[number];
        password=password+fetchCharacter;
        upper_case(fetchCharacter);
        lower_case(fetchCharacter);
        
       }  //terminates for loop

       specialCharCount=digits-upperCaseCount-lowerCaseCount;

       if (specialCharCount == 0) {
         
         pwdLessLastChar = password.substring(0,digits-1);
         listlength=specialCase.length;
         number = getRandomInt(listlength);
         fetchCharacter = specialCase[number];
         password=pwdLessLastChar+fetchCharacter;
       }
       if (lowerCaseCount == 0) {
         
        pwdLessLastChar = password.substring(0,digits-1);
        listlength=lowerCase.length;
        number = getRandomInt(listlength);
        fetchCharacter = lowerCase[number];
        password=pwdLessLastChar+fetchCharacter;
       
     }

     if (upperCaseCount == 0) {
        pwdLessLastChar = password.substring(0,digits-1);
        listlength=upperCase.length;
        number = getRandomInt(listlength);
        fetchCharacter = upperCase[number];
        password=pwdLessLastChar+fetchCharacter;
      
     
   }
     
    randomPassword.textContent = password;

  
});     /////closes parenthesis and terminates function for generatePassword()


  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
   }




  function upper_case(str)
  {
     regexp = /^[A-Z]/;
       if (regexp.test(str))
      {
        upperCaseCount=upperCaseCount+1;
      } 
   }
  
  function lower_case(str)
  {
     regexp = /^[a-z]/;
       if (regexp.test(str))
      {
        lowerCaseCount=lowerCaseCount+1;
      } 
  }







