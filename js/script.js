//common function
function getInputValue(field){
    const strValue = document.getElementById(field)
    const getValue = parseFloat(strValue.value)
    return getValue;
}



//event handaler
document.getElementById('claculate-btn').addEventListener('click',function(){
    const income = getInputValue('income-input')
    const food = getInputValue('food-input')
    const rent = getInputValue('rent-input')
    const cloths = getInputValue('clothes-input')

    let totalExpenses = food + rent + cloths;
    let balance = income - totalExpenses

    const totalExpensesText = document.getElementById('total-expenses')
    const balanceText = document.getElementById('balance')

    totalExpensesText.innerText = totalExpenses;
    balanceText.innerText = balance

})
