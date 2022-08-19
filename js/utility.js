//get the value of the input
function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

//get the value of the previous deposit
function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementAmountString = element.innerText;
  const elementAmount = parseFloat(elementAmountString);
  return elementAmount;
}
//total amount calculating function
function setTotalValue(elementId, newValue) {
  const setTextElement = document.getElementById(elementId);
  setTextElement.innerText = newValue;
}
