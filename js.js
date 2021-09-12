let answer;

let isLastClickedAnOperation = false;

let calculationText = "";

function clearInput() {
  answer.innerText = "0";
  calculationText = "0";
}

answer = document.getElementById("answer");

const buttons = document.getElementsByClassName("input-button");

const equals = document.getElementById("equals");


equals.addEventListener("click", function () {
  // if last clicked button was an operation, ignore last character from memory
  console.log(calculationText);
  let answerToEval = calculationText
  if(isLastClickedAnOperation === true) {
    answerToEval = answerToEval.substring(0,answerToEval.length - 1);
    isLastClickedAnOperation === false;
  }
  answerToEval = answerToEval.replace("x","*");
  answerToEval = answerToEval.replace("%","/");
  answer.innerText = Math.round(eval(answerToEval) * 100000) / 100000;
  calculationText = answer.innerText;
});


  for (let button of buttons) {
    const isOperationOnly = button.hasAttribute("data-operation-only");
    button.addEventListener("click", function () {
      const answerText = answer.innerText;
      const buttonText = button.innerText;

      // When answerText is 0 (calculator has just been opened) 
      // a) Do nothing if operation has been clicked
      // add what was clicked to both displayed text and calculator memory
      if (answerText === "0") {
        if(isOperationOnly === true) {
      // if 1st thing clicked is a minus, treat as button, else ignore
          if(button.innerText === "-") {
            answer.innerText = buttonText;
            calculationText = buttonText;
          }
          return;
        }
        answer.innerText = buttonText;
        calculationText = buttonText;
      
      } else {
      // When operation has been clicked, update calculator memory, but do nothing with displayed text
      // also flag that last clicked was an operation
        if(isOperationOnly === true) {
          if(isLastClickedAnOperation === false) {
          calculationText = calculationText + buttonText;
          isLastClickedAnOperation = true;
          } else {
      // if operation was clicked when lastclicked was also an operation, replace last character of calculationText with current click      
              calculationText = calculationText.substring(0,calculationText.length - 1);
              calculationText = calculationText + buttonText;
          }
        } else {
          if(isLastClickedAnOperation === true) {
      // When button clicked is not an operation, and last button clicked was an operation,
      // updated screen to show last clicked button and updates calculator memory
            isLastClickedAnOperation = false;
            answer.innerText = buttonText;
            calculationText = calculationText + buttonText;
          } else {
      // When last clicked buttom wasn't and operation, and currently clicked button isn't an operation, 
      // update the screen and calculator memory
        isLastClickedAnOperation = false;
        answer.innerText = answerText + buttonText;
        calculationText = calculationText + buttonText;
          }
        }
      }
    });
  }
;

// OK - dodaj funkcje która formatuje liczbe zeby nie bylo wiecej niz 5 miejsc po przecinku
// OK -zapisywal ostatni wynik, i zeby sie wpisywalo liczba operacja
// OK - jest inupt and operation
// co jesli 2 operacje
// zainstaluj prettier w ide

