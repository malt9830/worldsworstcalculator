"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  document.querySelector("#clear").addEventListener("click", clear);
  document.querySelector("#calculate").addEventListener("click", calculate);
});

const checkbox = document.querySelector("#doround");
const results = document.querySelector("#results");
const number1 = document.querySelector("#firstnumber");
const number2 = document.querySelector("#secondnumber");
let operator;
let rounding;
let result;
let resultValue;

function clear() {
  //Empty the previous results container
  results.innerHTML = "";
}

function calculate() {
  //Get operator
  operator = document.querySelector("#operator").value;

  //Calculate result based on given operation
  if (operator === "add") {
    resultValue = parseInt(number1.value) + parseInt(number2.value);
  } else if (operator === "sub") {
    resultValue = number1.value - number2.value;
  } else if (operator === "mul") {
    resultValue = number1.value * number2.value;
  } else if (operator === "div") {
    resultValue = number1.value / number2.value;
  }

  //Read checkbox to know whether to round or not
  if (checkbox.checked === true) {
    //Get amound of decimals to round to
    rounding = parseInt(document.querySelector("#decimals").value);

    //Change the result based on number of decimals rounded to
    resultValue = resultValue.toFixed(rounding);
  }

  //Post result as value of first input
  number1.value = resultValue;

  //Append to list of results and scroll to bottom
  result = document.createElement("li");
  result.textContent = resultValue;
  results.appendChild(result);
  results.scrollTop = results.scrollHeight;
}
