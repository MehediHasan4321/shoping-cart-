
document.getElementById("phone-pluse-btn").addEventListener("click", () => {
    const num = updateInpValue(true, "phone-quentity");
    setInnerValue("phone-quentity", num)
    if (num > 0) {
        const phonePrice = 1219 * num;
        setInnerText("phone-price", phonePrice)
    }
    calculateSubTotal()
})

document.getElementById("phone-minus-btn").addEventListener("click", () => {
    const num = updateInpValue(false, "phone-quentity");
    setInnerValue("phone-quentity", num)
    if (num > 0) {
        const phonePrice = 1219 * num;
        setInnerText("phone-price", phonePrice)
    }
    calculateSubTotal()
})


document.getElementById("case-minus-btn").addEventListener("click", () => {
    const num = updateInpValue(false, "case-quantity");
    setInnerValue("case-quantity", num)
    if (num > 0) {
        const casePrice = 59 * num
        setInnerText("case-price", casePrice)
    }
    calculateSubTotal()

})
document.getElementById("case-plus-btn").addEventListener("click", () => {
    const num = updateInpValue(true, "case-quantity");
    setInnerValue("case-quantity", num)
    if (num > 0) {
        const casePrice = 59 * num
        setInnerText("case-price", casePrice)
    }
    calculateSubTotal()
})
//calculateSubTotal()





//Root functions .......
function calculateSubTotal() {
    const phonePriceStr = document.getElementById("phone-price").innerText;
    const phonePriceNum = strToNum(phonePriceStr);
    const casePriceStr = document.getElementById("case-price").innerText;
    const cacePriceNum = strToNum(casePriceStr);
    const subTotal = phonePriceNum + cacePriceNum;
    // calculate tax 
    const taxtAmountStr = (subTotal * 10 / 100).toFixed(1)
    const taxtAmount = strToNum(taxtAmountStr)
    //calculat totoal
    const totol = subTotal + taxtAmount;


    setInnerText("sub-total", subTotal)
    setInnerText("taxt", taxtAmount)
    setInnerText("total",totol)

}
function strToNum(str) {
    const num = parseFloat(str);

    return num
}

function updateInpValue(isIncress, id) {
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