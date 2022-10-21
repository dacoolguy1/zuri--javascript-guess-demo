//Create a number guessing game to generate a number between the range of 1 and 2
//so we declare variable range and prompt

function Input() {
  // the prompt for the username is done below
  let username = prompt("Enter your username: ");
  alert("welcome: " + username);
  var score = 0;
  let usernumber = Math.round(Math.random() * 10);
  alert(usernumber);
    userinput = prompt("Try to predict the given number within the range " + score + " - 10");
  if (userinput != "null") {
      if (userinput == usernumber) {
        for (score=1; score<= 3; score++) {
          alert("You are in stage: " + score);
          userinput = prompt("Try to predict the given number within the range " + score + " - 10"); 
        }
      } else {
        alert("Game over, please try again");
      }

    }
  else {
    alert("Enter a valid input")
  }
}
Input();