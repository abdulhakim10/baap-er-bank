/*
step-1: add event handler with the withdraw button
step-2: get the withdraw amount from the withdraw input field
2-5: make sure to convert the input into a number by using parseFloat()
step-3: get the withdraw total
step-4: calculate total withdraw amount
4-5: set total withdraw amount
step-5: get the previous balance total
step-6: calculate the balance total
6-5: set the balance total
*/

// step-1: add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step-2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3: get the withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-4: calculate total withdraw amount
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate the balance total
    const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentTotalBalance;

    // step-7: clear the input field
    withdrawField.value = '';
})