document.getElementById("withdraw-btn").addEventListener("click", function () {
  // set the withdraw amount to parameter
  const newWithdrawAmount = getInputValueById("withdraw");

  //set the previous withdraw total to parameter
  const previousWithdrawTotal = getElementValueById("withdraw-amount");

  //calculate the total withdraw amount
  const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

  //set the total amount of withdraw to parameter
  setTotalValue("withdraw-amount", newWithdrawTotal);

  //set the total amount to parameter
  const previousTotalBalance = getElementValueById("balance-amount");
  //calculate the total balance after withdraw
  const newTotalBalance = previousTotalBalance - newWithdrawAmount;
  console.log(newTotalBalance);

  //set the total amount of withdraw to parameter
  setTotalValue("balance-amount", newTotalBalance);
});
