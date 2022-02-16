//common function
function getInputValue(field) {
    const strValue = document.getElementById(field)
    const getValue = parseFloat(strValue.value)
    return getValue;
}

function inputError(error) {
    const Warning = document.getElementById('Warning')
    Warning.style.display = error
}

function balanceError(error) {
    const balanceWarning = document.getElementById('balance-Warning')
    balanceWarning.style.display = error
}


//event handaler
document.getElementById('claculate-btn').addEventListener('click', function () {
    const income = getInputValue('income-input')
    const food = getInputValue('food-input')
    const rent = getInputValue('rent-input')
    const cloths = getInputValue('clothes-input')

    if (income > 0 && food > 0 && rent > 0 && cloths > 0) {
        let totalExpenses = food + rent + cloths;
        let balance = income - totalExpenses
        console.log(balance)

        if (balance > 0) {
            const totalExpensesText = document.getElementById('total-expenses')
            const balanceText = document.getElementById('balance')

            totalExpensesText.innerText = totalExpenses;
            balanceText.innerText = balance
            balanceError('none')
        }
        else{
            balanceError('block')
        }

        inputError('none')

    } else {
        inputError('block')
    }

})


document.getElementById('saving-btn').addEventListener('click', function () {
    const savePersent = getInputValue('saving-input')
    const income = getInputValue('income-input')

    if (savePersent > 0 && income > 0) {
        let saving = (income * savePersent) / 100
        let remainingBlacne = income - saving;
        const savingAmount = document.getElementById('saving-amount')
        const remainingBlacneNew = document.getElementById('remaining-balance')
        savingAmount.innerText = saving
        remainingBlacneNew.innerText = remainingBlacne
        inputError('none')
    } else {
        inputError('block')
    }
})