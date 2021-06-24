let answer;

function clearInput() {
  answer.innerText = "0";
}

function add(input, value) {
  return input + value;
}

function subtraction(input, value) {
  return input - value;
}

function division(input, divideBy) {
  return input / divideBy;
}

function multiplication(input, multiplyBy) {
  return input * multiplyBy;
}

window.onload = function () {
  console.warn("teste");
  answer = document.getElementById("answer");

  const buttons = document.getElementsByClassName("input-button");

  for (let button of buttons) {
    console.log(button.innerText);
    button.addEventListener("click", function () {
      const answerText = answer.innerText;
      const buttonText = button.innerText;

      if (answerText === "0") {
        answer.innerText = buttonText;
      } else {
        answer.innerText = answerText + buttonText;
      }
    });
  }
};
