const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/npr.json";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");


for(let select of dropdowns){
    for (let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "NPR"){
            newOption.selected = true;
        }
        else if (select.name ==="to" && currCode ==="INR"){
            newOption.selected = true;
        }
        select.append(newOption);
    } 

    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    })
}


const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    element.parentElement.querySelector("img").src = newSrc;
}

btn.addEventListener("click" , (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector("form input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }
    console.log(fromCurr.value, toCurr.value);
})
