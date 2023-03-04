let num1 = 2;
let num2 = 8;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").innerText = num2;

function Add() {
  let result = num1 + num2;
  document.getElementById("sum-el").textContent = "Sum= " + result;
}
function subtract() {
  document.getElementById("sum-el").textContent = num1 - num2;
}
function divide() {
  document.getElementById("sum-el").textContent = num1 / num2;
}
function multiply() {
  document.getElementById("sum-el").textContent = num1 * num2;
}
