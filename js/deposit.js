document.getElementById("deposit-btn").addEventListener("click", function () {
  //set parameter for getInputValueById
  const newDepositAmount = getInputValueById("deposit");

  //set parameter for getElementValueById
  const previousDepositTotal = getElementValueById("deposit-amount");
  //calculate newDeposit total

  const newDepositTotal = newDepositAmount + previousDepositTotal;

  //set the total value of deposit value
  setTotalValue("deposit-amount", newDepositTotal);

  //get the total balance
  const totalBalance = getElementValueById("balance-amount");

  // calculate the total balance
  const newTotalBalance = newDepositAmount + totalBalance;

  //set the total value of deposit value
  setTotalValue("balance-amount", newTotalBalance);
});
