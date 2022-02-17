//common function
function getInputValue(field) {
    const strValue = document.getElementById(field)
    const getValue = parseFloat(strValue.value)
    return getValue;
}
//input error functio
function inputError(error) {
    const Warning = document.getElementById('Warning')
    Warning.style.display = error
}
// balance error function
function balanceError(error) {
    const balanceWarning = document.getElementById('balance-Warning')
    balanceWarning.style.display = error
}

let getBalance = 0
//event handaler on claculate btn
document.getElementById('claculate-btn').addEventListener('click', function () {
    const income = getInputValue('income-input')
    const food = getInputValue('food-input')
    const rent = getInputValue('rent-input')
    const cloths = getInputValue('clothes-input')

    // input error check 
    if (income > 0 && food >= 0 && rent >= 0 && cloths >= 0) {
        let totalExpenses = food + rent + cloths;
        let balance = income - totalExpenses
        getBalance = balance
        //balance error check
        if (balance >= 0) {
            const totalExpensesText = document.getElementById('total-expenses')
            const balanceText = document.getElementById('balance')

            totalExpensesText.innerText = totalExpenses;
            balanceText.innerText = balance
            balanceError('none')
        }
        else{
            balanceError('block')
            inputError('none')
        }

        inputError('none')

    } else {
        inputError('block')
        balanceError('none')
    }

})

//event handaler on saving btn
document.getElementById('saving-btn').addEventListener('click', function () {
    const savePersent = getInputValue('saving-input')
    const income = getInputValue('income-input')

    //saving % input error check 
    if (savePersent >= 0 && savePersent <= 100 && income > 0) {
        let saving = (income * savePersent) / 100
        let remainingBlacne = getBalance - saving;
        const savingAmount = document.getElementById('saving-amount')
        const remainingBlacneNew = document.getElementById('remaining-balance')
        //saving balance error check
        if(getBalance >= saving){
        savingAmount.innerText = saving
        remainingBlacneNew.innerText = remainingBlacne
        inputError('none')
        balanceError('none')
        }
        else{
            balanceError('block')
        }
    } else {
        inputError('block')
        balanceError('none')
    }
})

//event handelar on close btn
document.getElementById('closeWarning').addEventListener('click',function(){
    inputError('none')
    
    
    
})
document.getElementById('closeWarning-2').addEventListener('click',function(){
    balanceError('none')
    
    
})