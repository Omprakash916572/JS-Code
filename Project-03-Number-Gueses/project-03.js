
let form = document.querySelector("form");
let remmainingCount = 10;
let limitCount = 10;
let previousNumberStore = [];
 let restart = true;

function hideRestart() {
  document.getElementById('restart').style.display = 'none';
}
if(restart){
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    error.innerHTML = ""; // its used for clear error message if user enterd anything wrong
    let number = parseInt(document.querySelector("#input-id").value);
  
    let validationError = numberValidation(number);
    if (validationError) { // null considered false in case JS.
      return (error.innerHTML = validationError);
    }
  
    limitCount++;
    let randomNumber = parseInt(Math.random() * 100);
  
    if (randomNumber == number) {
      winner.innerHTML = "Congratulations.";
    }
     else {
      remmainingCount--;
      if (previousNumberStore.length < 10) { // only push 10 previous numbers in array.
        previousNumberStore.push(number);
        updatePreviousGuesses();
      }
      
    }
  
    if (remmainingCount <= 10 && remmainingCount >= 0) {
      rm.innerHTML = "Remaining Guesses: " + remmainingCount.toString();
    } else {
      rm.innerHTML = "You exceed the limit.";
      return;
    }
  
    document.querySelector("#input-id").value = ""; // its used for clear input fied after user enter somthing
  
    endGame(remmainingCount);
  });
}
function restartGame() {
  remmainingCount = 10;
  previousNumberStore = [];
  restart = true;
}

document.getElementById('restart').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the default behavior of the link (e.g., navigating to a new page)

  // Call the restartGame function
  restartGame();

  // Additional actions you may want to perform when the link is clicked
  // For example, hiding the restart message or resetting the display
  hideRestart();
  rm.innerHTML = '<span>Remaining Guesses: 10</span>';
  pg.innerHTML = '<span>Previous Guesses: </span>';
  document.getElementById('input-id').removeAttribute('disabled');
  document.getElementById('btn').removeAttribute('disabled');
});

function endGame(remmainingCount) {
  if (remmainingCount == 0) {
    document.querySelector("#input-id").setAttribute("disabled", "");
    document.querySelector("#btn").setAttribute("disabled", "");
    rm.innerHTML= "<h2>Game Over!!</h2>";
    
    showRestart();
  }

}

function numberValidation(number) {
  if (number < 0) {
    return "Number is Too Small.";
  } else if (number > 100) {
    return "Number is Too Large.";
  } else if (isNaN(number)) {
    return "Please enter a valid number.";
  }
  return null; // No error
}

function updatePreviousGuesses() {
  let pgElement = document.getElementById("pg");

  let filteredArray = previousNumberStore.filter(
    (value) => value !== undefined && value !== null && value !== ""
  );

  if (filteredArray.length > 0) {
    pgElement.innerHTML =
      "<span>Previous Guesses: </span>" + filteredArray.join(", ");
  }
}

function showRestart() {
  document.getElementById('restart').style.display = 'block';
}



