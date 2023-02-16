let total = 0;
document.getElementById("phone-pluse-btn").addEventListener("click", () => {
    const num = updateInpValue(true,"phone-quentity");
    setInnerValue("phone-quentity", num)
    if (num > 0) {
        const phonePrice = 1219 * num;
        total = total + phonePrice
        setInnerText("sub-total",total)
        setInnerText("phone-price", phonePrice)
    }

})

document.getElementById("phone-minus-btn").addEventListener("click", () => {
    const num = updateInpValue(false,"phone-quentity");
    setInnerValue("phone-quentity", num)
    if (num > 0) {
        const phonePrice = 1219 * num;
        total -+ phonePrice
        setInnerText("sub-total",total)
        setInnerText("phone-price", phonePrice)
    }
})


document.getElementById("case-minus-btn").addEventListener("click", () => {
    const num = updateInpValue(false,"case-quantity");
    setInnerValue("case-quantity", num)
    if(num>0){
        const casePrice = 59 * num
        setInnerText("case-price",casePrice)
    }
    
    
})
document.getElementById("case-plus-btn").addEventListener("click", () => {
    const num = updateInpValue(true,"case-quantity");
    setInnerValue("case-quantity", num)
    if(num>0){
        const casePrice = 59 * num
        setInnerText("case-price",casePrice)
    }
})






//Root functions .......
function strToNum(str) {
    const num = parseFloat(str);

    return num
}

function updateInpValue(isIncress,id) {
    const input = document.getElementById(id);
    const inputValue = input.value;
    const inputValueNum = strToNum(inputValue);
    let updatevalue;
    if (isIncress) {
        updatevalue = inputValueNum + 1;
    } else {
        updatevalue = inputValueNum - 1
    }

    return updatevalue
}

function setInnerText(id, value) {
    let elementId = document.getElementById(id);
    elementId.innerText = value
}

function setInnerValue(id, value) {
    let elementId = document.getElementById(id);
    elementId.value = value
}
