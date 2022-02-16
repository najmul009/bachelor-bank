//common function
function getInputValue(field){
    const strValue = document.getElementById(field)
    const getValue = parseFloat(strValue.value)
    return getValue;
}

document.getElementById('claculate-btn')