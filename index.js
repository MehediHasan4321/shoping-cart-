document.getElementById("phone-pluse-btn").addEventListener("click",()=>{
    const num = updateInpValue(true);
    setInnerValue("phone-quentity",num)
    const phonePrice = 1219 * num;
    setInnerText("phone-price",phonePrice)
    
})

document.getElementById("phone-minus-btn").addEventListener("click",()=>{
   const num = updateInpValue(false);
   setInnerValue("phone-quentity",num)
})


document.getElementById("case-minus-btn").addEventListener("click",()=>{
    const num = updateInpValue(false);
    setInnerValue("case-quantity",num)
})
document.getElementById("case-plus-btn").addEventListener("click",()=>{
    const num = updateInpValue(true);
    setInnerValue("case-quantity",num)
})






//Root functions .......
function strToNum(str){
    const num = parseFloat(str);

    return num
}

function updateInpValue(isIncress){
    const input= document.getElementById("phone-quentity");
    const inputValue = input.value;
    const inputValueNum = strToNum(inputValue);
    let updatevalue;
    if(isIncress){
        updatevalue = inputValueNum + 1;
    }else{
        updatevalue = inputValueNum - 1
    }

    return updatevalue
}

function setInnerText(id,value){
    let elementId = document.getElementById(id);
    elementId.innerText = value
}

function setInnerValue(id,value){
    const elementId = document.getElementById(id);
    elementId.value = value
}
