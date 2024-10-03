// alert("Calculator");
// variables and dom
const screen = document.getElementById("screen");
const container = document.querySelector(".container");

let screenText = "";
let result = 0;
let text = "";

// calculate the value
function calculate(operator, num1, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === " - ") {
    return num1 - num2;
  } else if (operator === " * ") {
    return num1 * num2;
  } else if (operator === " / ") {
    return num1 / num2;
  }
}

// to get each value from the button without inserting it into the dom
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("buttons")) {
    const value = event.target.textContent.trim();

    screenText += value;
    let numberAndOperator = screenText.split(/([+\-*/])/);

    result = calculate(
      numberAndOperator[1],
      parseInt(numberAndOperator[0]),
      parseInt(numberAndOperator[2])
    );

    console.log(result);

    // console.log(numberAndOperator);
  }
});
