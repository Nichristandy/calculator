// alert("Calculator");
// variables and dom
const screenResult = document.getElementById("screen");
const container = document.querySelector(".container");
const resultBTN = document.querySelector(".large-buttons");

let screenText = "";
let result = 0;
let text = "";

// calculate the value
function calculate(operator, num1, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "X") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
}

// to get each value from the button without inserting it into the dom
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("buttons")) {
    const value = event.target.textContent.trim();

    if (value === "=") {
      let numberAndOperator = screenText.match(/(\d+\.?\d*|\D)/g);

      if (numberAndOperator.length === 3) {
        let num1 = parseInt(numberAndOperator[0]);
        let operator = numberAndOperator[1];
        let num2 = parseInt(numberAndOperator[2]);

        if (!isNaN(num1) && !isNaN(num2)) {
          result = calculate(operator, num1, num2);
          console.log(result);
          screenResult.innerText = result; // Display the result
          screenText = result; // Update the screen text for further operations
        }
      }
    }
    // If the clear button (C) is clicked, reset the screen
    else if (value === "C") {
      screenText = "";
      screenResult.innerText = "0";
    }
    // Otherwise, update the screen with the clicked value
    else {
      // Only allow one operator at a time
      if ("+-*/".includes(value)) {
        if (operatorUsed) return; // Prevent multiple operators in a row
        operatorUsed = true;
      } else {
        operatorUsed = false; // Reset when a number is pressed
      }

      screenText += value; // Add the clicked value to the screenText
      screenResult.innerText = screenText; // Show the current operation on the screen
    }

    // console.log(numberAndOperator);
  }
});
