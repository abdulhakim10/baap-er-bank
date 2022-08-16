// step-1: add event listner to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2: get the deposit amount inside the deposit input field
    // always remember to use .value to get text from an input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-7: clear the deposit field value
    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('please enter a valid number');
        return;
    }

    // step-3: get the current deposit total
    // to get text from non-input field use .innerText 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get the current balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6:get the total balance
    const currentTotalBalance = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentTotalBalance;

})